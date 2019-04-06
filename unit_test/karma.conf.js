// Karma configuration
// Generated on Sat Apr 06 2019 14:37:51 GMT+0800 (GMT+08:00)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // 测试框架
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // 测试文件和测试用例配对
        // list of files / patterns to load in the browser
        files: [
            "./tests/*.js",
            "./tests/*.spec.js"
        ],


        // list of files / patterns to exclude
        exclude: [],

        // 进行覆盖率检查的文件
        preprocessors: {
            './tests/**/*.js': ['coverage']
        },


        // 测试报告内容：测试进度 + 覆盖率coverage
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // 报告生成格式
        coverageReporter: {
            type: 'html',
            dir: './docs/coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // PhantomJS 无头(没有界面)浏览器
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        //使用PhantomJS，这里必须为true
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}