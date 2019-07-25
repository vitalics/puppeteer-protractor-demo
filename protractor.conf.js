'use strict';
const {performance} = require('perf_hooks');

let startTime = 0;
// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    // 'chromeOptions': {
    //   'args': ["--headless"]
    // }
  },
  directConnect: true,
  beforeLaunch: () => {
    // require('ts-node').register();
    startTime = performance.now();
  },
  onComplete: () => {
    console.log(`diff: ${performance.now() - startTime}`);
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['protractor/test.e2e.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000
  }
};
