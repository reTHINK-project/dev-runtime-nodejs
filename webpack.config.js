var path = require('path');
var webpack = require('webpack');
var packageFile = require('./package.json');
var  nodeExternals = require('webpack-node-externals');

var PrependText = require('./webpack/PrependText.js');

var license = '/**\n' +
'* Copyright 2016 PT Inovação e Sistemas SA\n' +
'* Copyright 2016 INESC-ID\n' +
'* Copyright 2016 QUOBIS NETWORKS SL\n' +
'* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V\n' +
'* Copyright 2016 ORANGE SA\n' +
'* Copyright 2016 Deutsche Telekom AG\n' +
'* Copyright 2016 Apizee\n' +
'* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN\n' +
'*\n' +
'* Licensed under the Apache License, Version 2.0 (the "License");\n' +
'* you may not use this file except in compliance with the License.\n' +
'* You may obtain a copy of the License at\n' +
'*\n' +
'*   http://www.apache.org/licenses/LICENSE-2.0\n' +
'*\n' +
'* Unless required by applicable law or agreed to in writing, software\n' +
'* distributed under the License is distributed on an "AS IS" BASIS,\n' +
'* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
'* See the License for the specific language governing permissions and\n' +
'* limitations under the License.\n' +
'**/\n\n';

function getModeConfig() {

  var plugins = [];

  plugins.push(new PrependText({
    bundleDir: './dist/',
    data: {
      version: packageFile.version,
      date: new Date(),
      licence: '\n' + license
    }
  }));

  if (process.env.MODE === 'prod') {

    plugins.push(new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }));

  }

  return plugins;
}

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  devtool: process.env.MODE === 'dev' ? 'inline-source-map' : false,
  entry: {
    RuntimeNode: './src/RuntimeNode.js',
    ContextApp: './src/ContextApp.js',
    ContextServiceProvider: './src/ContextServiceProvider.js',
    core: './src/core.js',
    Request: './src/Request.js',
    RuntimeCapabilities: './src/RuntimeCapabilities.js',
    RuntimeFactory: './src/RuntimeFactory.js',
    SandboxApp: './src/SandboxApp.js',
    SandboxWorker: './src/SandboxWorker.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: getModeConfig()
};