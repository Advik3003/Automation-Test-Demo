exports.config = {
    // The address of a running Selenium server. For Chrome, you can set it to direct connect.
    directConnect: true,
  
    // Capabilities to be passed to the WebDriver instance.
capabilities: {
  browserName: 'chrome',
  chromeOptions: {
    binary: 'C:/Program Files/Google/Chrome/Application/chrome.exe' // Path to Chrome binary
  }
},
// chromeDriver: './path/to/chromedriver',  // Path to the ChromeDriver binary
  
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  
    // Spec patterns are relative to the current working directory when protractor is called.
    // specs: ['spec.js'],
    
    specs: ['./testcases/testdemo.js',
            //'test.js','spec.js',
          ],
    
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };