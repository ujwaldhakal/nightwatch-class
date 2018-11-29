require('babel-register')();
require('env2')('.env');
'use strict'


module.exports = {
	abortOnAssertionFailure: false,
  beforeEach: function (browser, done) {
    require('nightwatch-video-recorder').start(browser, done)
  },
  afterEach: function (browser, done) {
    require('nightwatch-video-recorder').stop(browser, done)
  }
}
