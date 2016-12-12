// Karma configuration
// Generated on Wed Sep 16 2015 12:17:06 GMT+0100 (WEST)

module.exports = function(config) {
	config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: [ 'mocha', 'browserify'],

		files: [
			'test/**/*.spec.js',
		],

		exclude: [
			'test/**/Sandbox*.spec.js',
		],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/**/*.js': ['browserify'],
			'src/**/*.js': ['browserify']
		},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

    // web server port
		port: 9876,

    // enable / disable colors in the output (reporters and logs)
		colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		browserify: {
			debug: true,
			extensions: ['js'],
			transform: [['babelify', {presets:['es2015']}]]
		}
	})
}
