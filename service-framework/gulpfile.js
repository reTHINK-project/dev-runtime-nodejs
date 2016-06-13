'use strict';

// jshint varstmt: false

var gulp = require('gulp');
var exec = require('child_process').exec;
var prompt = require('gulp-prompt');

// Task and dependencies to distribute for all environments;
var babel = require('babelify');
var _ = require('lodash');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var replace = require('gulp-replace');
var insert = require('gulp-insert');
var uglify = require('gulp-uglify');
var argv = require('yargs').argv;
var through = require('through2');
var path = require('path');
var gulpif = require('gulp-if');
var gutil = require('gulp-util');

var Base64 = require('js-base64').Base64;
var fs = require('fs');

var extensions = ['.js', '.json'];

var pkg = require('./package.json');

var license = '/**\n' + '* Copyright 2016 PT Inovação e Sistemas SA\n' + '* Copyright 2016 INESC-ID\n' + '* Copyright 2016 QUOBIS NETWORKS SL\n' + '* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V\n' + '* Copyright 2016 ORANGE SA\n' + '* Copyright 2016 Deutsche Telekom AG\n' + '* Copyright 2016 Apizee\n' + '* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN\n' + '*\n' + '* Licensed under the Apache License, Version 2.0 (the "License");\n' + '* you may not use this file except in compliance with the License.\n' + '* You may obtain a copy of the License at\n' + '*\n' + '*   http://www.apache.org/licenses/LICENSE-2.0\n' + '*\n' + '* Unless required by applicable law or agreed to in writing, software\n' + '* distributed under the License is distributed on an "AS IS" BASIS,\n' + '* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' + '* See the License for the specific language governing permissions and\n' + '* limitations under the License.\n' + '**/\n\n';

// Gulp task to generate development documentation;
gulp.task('doc', function (done) {

  console.log('Generating documentation...');
  exec('node_modules/.bin/jsdoc -d api src/*', function (err) {
    if (err) return done(err);
    console.log('Documentation generated in "docs" directory');
    done();
  });
});

gulp.task('license', function () {

  var clean = argv.clean;
  if (!clean) clean = false;

  return gulp.src(['src/**/*.js']).pipe(prependLicense(clean));
});

function prependLicense(clean) {

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      return cb(new Error('Fil is null'));
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    var dest = path.dirname(file.path);

    return gulp.src(file.path).pipe(replace(license, '')).pipe(gulpif(!clean, insert.prepend(license))).pipe(gulp.dest(dest)).on('end', function () {
      cb();
    });
  });
}

gulp.task('dist', function () {

  return gulp.src(['src/CatalogueFactory.js', 'src/discovery/Discovery.js', 'src/identityManager/IdentityManager.js', 'src/HypertyDiscovery.js', 'src/MessageFactory.js', 'src/RuntimeCatalogue.js', 'src/service-framework.js', 'src/Syncher.js']).pipe(dist());
});

gulp.task('encode', function (done) {

  var files = [];
  var dirFiles = fs.readdirSync('resources');
  files = dirFiles.filter(isFile);
  files = files.map(function (file) {
    return 'resources/' + file;
  });

  function isFile(file) {
    if (file.indexOf('Hyperty') !== -1 || file.indexOf('ProtoStub') !== -1 || file.indexOf('DataSchema') !== -1 || file.indexOf('ProxyStub') !== -1 || file.indexOf('runtime') !== -1 || file.indexOf('Runtime') !== -1) {
      return fs.statSync('resources/' + file).isFile();
    }
  }

  gulp.src('./', { buffer: false }).pipe(prompt.prompt([{
    type: 'list',
    name: 'file',
    message: 'File to be converted:',
    choices: files
  }, {
    type: 'list',
    name: 'esVersion',
    message: 'This file are in ES5 or ES6',
    choices: ['ES5', 'ES6']
  }, {
    type: 'input',
    name: 'configuration',
    message: 'ProtoStub Configuration, use something like:\n{"url": "wss://msg-node.localhost:9090/ws"}\nConfiguration:',
    validate: function validate(value) {
      try {
        JSON.parse(value);
        return true;
      } catch (e) {
        gutil.log('Default value is {}');
        return true;
      }
    }
  }, {
    type: 'input',
    name: 'name',
    message: 'Name of hyperty, protostub, dataschema (not specify use the file name):'
  }, {
    type: 'list',
    name: 'defaultFile',
    message: 'This will be a default file to be loaded?',
    choices: ['no', 'yes']
  }], function (res) {

    fs.access(res.file, fs.R_OK | fs.W_OK, function (err) {
      if (err) done(new Error('No such file or directory'));
      return;
    });

    var configuration = JSON.parse(res.configuration || '{}');

    var isDefault = false;
    if (res.defaultFile === 'yes' || res.defaultFile === 'y') {
      isDefault = true;
    }

    var opts = {
      configuration: configuration,
      isDefault: isDefault
    };

    var transpileOpts = {
      configuration: {},
      debug: false,
      standalone: path.parse(res.file).basename,
      destination: __dirname + '/resources/tmp'
    };

    if (res.name) {
      opts.name = res.name;
    }

    var isES6 = false;
    if (res.esVersion === 'ES6') {
      isES6 = true;
      transpileOpts.standalone = 'activate';
    }

    if (res.file) {
      return gulp.src(res.file).pipe(gulpif(isES6, transpile(transpileOpts))).pipe(resource(opts)).on('end', function () {
        gutil.log('encoded');
      });
    }
  }));
});

function dist(debug) {

  if (!debug) debug = false;

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      return cb(new Error('Fil is null'));
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    var filename = path.basename(file.path, '.js');

    var opts = {
      configuration: {},
      debug: false,
      standalone: filename,
      destination: __dirname + '/dist'
    };

    gutil.log(gutil.colors.yellow('Make a distribution file from', filename + '.js'));

    gulp.src([file.path]).pipe(transpile(opts)).pipe(mark()).pipe(gulp.dest(__dirname + '/dist')).on('error', function (error) {
      gutil.log(gutil.colors.red(error));
    }).on('end', function () {
      gutil.log('> ' + gutil.colors.green('Distribution ') + gutil.colors.white(filename) + gutil.colors.green(' done!'));
      cb();
    });
  });
}

function mark() {

  return through.obj(function (file, enc, cb) {

    var fileObject = path.parse(file.path);

    gulp.src([file.path]).pipe(insert.prepend(license + '// Distribution file for {{package}} \n// version: {{version}}\n// Last build: {{date}}\n\n')).pipe(replace('{{version}}', pkg.version)).pipe(replace('{{package}}', fileObject.name + '.js')).pipe(replace('{{date}}', new Date())).pipe(gulp.dest(__dirname + '/dist')).on('end', function () {
      cb();
    });
  });
}

function transpile(opts) {

  return through.obj(function (file, enc, cb) {

    var fileObject = path.parse(file.path);
    var args = {};

    var environment = argv.production || process.env.NODE_ENV;
    process.env.environment = environment ? 'production' : 'development';

    args.entries = [file.path];
    args.extensions = extensions;
    if (opts.debug) args.debug = opts.debug;
    if (opts.standalone) args.standalone = opts.standalone;

    return browserify(args).transform(babel, {
      compact: true,
      presets: ['es2015', 'stage-0'],
      plugins: ['add-module-exports', 'babel-polyfill', 'transform-inline-environment-variables', 'transform-runtime', 'transform-regenerator']
    }).bundle().on('error', function (err) {
      gutil.log(gutil.colors.red(err));
      this.emit('end');
    }).pipe(source(fileObject.base)).pipe(buffer()).pipe(sourcemaps.init({ loadMaps: true })).pipe(uglify()).pipe(sourcemaps.write('./')).pipe(gulp.dest(opts.destination)).on('end', function () {
      file.contents = fs.readFileSync(opts.destination + '/' + fileObject.base);
      file.path = opts.destination + '/' + fileObject.base;
      cb(null, file);
    });
  });
}

function resource(opts) {

  return through.obj(function (file, enc, done) {

    gutil.log('Resource: ', file.path);
    var fileObject = path.parse(file.path);

    opts = _.extend({
      configuration: {},
      isDefault: false
    }, opts || {});

    var filename = fileObject.name;
    var descriptorName;
    if (filename.indexOf('hy') !== -1) {
      descriptorName = 'Hyperties';
    } else if (filename.indexOf('ProtoStub') !== -1) {
      descriptorName = 'ProtoStubs';
    } else if (filename.indexOf('ds') !== -1) {
      descriptorName = 'DataSchemas';
    } else if (filename.indexOf('runtime') !== -1 || filename.indexOf('Runtime') !== -1) {
      descriptorName = 'Runtimes';
    } else if (filename.indexOf('ProxyStub') !== -1) {
      descriptorName = 'IDPProxys';
    }

    var defaultPath = 'resources/';
    if (fileObject.dir.indexOf('tmp') !== -1) {
      defaultPath = 'resources/tmp/';
    }

    opts.descriptor = descriptorName;

    gutil.log('Encoding: ', defaultPath, filename, opts);

    return gulp.src([file.path]).pipe(encode(opts)).pipe(source(opts.descriptor + '.json')).pipe(gulp.dest('resources/descriptors/')).on('end', function () {
      var path = 'resources/descriptors/' + opts.descriptor + '.json';
      file.contents = fs.readFileSync(path);
      file.path = path;
      done(null, file);
    });
  });
}

function encode(opts) {

  opts = _.extend({}, opts || {});

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      return cb(new Error('Streaming not supported'));
    }

    gutil.log('Encode: ', file.path);

    var fileObject = path.parse(file.path);
    var descriptor = fs.readFileSync('resources/descriptors/' + opts.descriptor + '.json', 'utf8');
    var json = JSON.parse(descriptor);
    var contents = fs.readFileSync(file.path, 'utf8');

    var encoded = Base64.encode(contents);
    var value = 'default';
    var filename = fileObject.name;

    if (fileObject.name.indexOf('.hy') !== -1) {
      filename = fileObject.name.replace('.hy', '');
    } else if (fileObject.name.indexOf('.ds') !== -1) {
      filename = fileObject.name.replace('.ds', '');
    }

    if (opts.isDefault) {
      value = 'default';
    } else {
      value = opts.name || filename;
    }

    if (!json.hasOwnProperty(value)) {
      var newObject = {};
      json[value] = newObject;
      json[value].sourcePackage = {};
    }

    var language = 'javascript';
    if (opts.descriptor === 'DataSchemas') {
      language = 'JSON-Schema';
    }

    json[value].cguid = Math.floor(Math.random() + 1);
    json[value].type = opts.descriptor;
    json[value].version = '0.1';
    json[value].description = 'Description of ' + filename;
    json[value].objectName = filename;

    if (opts.configuration) {
      if (_.isEmpty(opts.configuration) && json[value].hasOwnProperty('configuration')) {
        opts.configuration = json[value].configuration;
      }

      json[value].configuration = opts.configuration;
      gutil.log('setting configuration: ', opts.configuration);
    }

    if (opts.descriptor === 'Runtimes') {
      json[value].runtimeType = 'browser';
      json[value].hypertyCapabilities = { mic: false };
      json[value].protocolCapabilities = { http: true };
    }

    if (opts.descriptor === 'ProtoStubs' || opts.descriptor === 'IDPProxys') {
      json[value].constraints = '';
    }

    json[value].sourcePackageURL = '/sourcePackage';
    json[value].sourcePackage.sourceCode = encoded;
    json[value].sourcePackage.sourceCodeClassname = filename;
    json[value].sourcePackage.encoding = 'base64';
    json[value].sourcePackage.signature = '';
    json[value].language = language;
    json[value].signature = '';
    json[value].messageSchemas = '';
    json[value].dataObjects = [];
    json[value].accessControlPolicy = 'somePolicy';

    var newDescriptor = new Buffer(JSON.stringify(json, null, 2));
    cb(null, newDescriptor);
  });
}