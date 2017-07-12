module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './test/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test/**/*.spec.js': ['webpack', 'sourcemap']
    },

    // webpack configuration
    webpack: {

      devtool: 'inline-source-map',
			target: 'node'

		},

    reporters: ['spec', 'html'],

    specReporter: {
      maxLogLines: 5,             // limit number of lines logged per test
      suppressErrorSummary: false, // do not print error summary
      suppressFailed: false,      // do not print information about failed tests
      suppressPassed: false,      // do not print information about passed tests
      suppressSkipped: false,      // do not print information about skipped tests
      showSpecTiming: true,      // print the time elapsed for each spec
      failFast: false              // test would finish with error when a first fail occurs.
    },

    // the default configuration
    htmlReporter: {
      outputFile: 'test/units.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'reThink Project performance tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },

    plugins: ['karma-spec-reporter',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha', 'karma-chai',
      'karma-sinon',
      'karma-htmlfile-reporter',
      'karma-mocha-reporter',
			'karma-phantomjs-launcher'],

    customDebugFile: './test/units.html',

    // customContextFile: './test/units.html',

    client: {
      mocha: {
        reporter: 'html'
      },
      runInParent: true,
      captureConsole: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
