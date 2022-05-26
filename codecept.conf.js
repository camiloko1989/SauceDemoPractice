exports.config = {
    output: './output',
    helpers: {
      Puppeteer: {
        url: 'https://saucedemo.com/',
        show: true,
        windowSize: '1200x900'
      }
    },
    include: {
      I: './steps_file.js',
      loginPage: './pages/loginPage.js',
      productPage: './pages/productPage.js',
      cartPage: './pages/cartPage.js',
    },
    mocha: {},
    bootstrap: null,
    timeout: 20,
    teardown: null,
    hooks: [],
    gherkin: {
      features: './features/*.feature',
      steps: ['./steps_definitions/loginSteps.js', './steps_definitions/addingProductSteps.js']
    },
    plugins: {
      screenshotOnFail: {
        enabled: true
      },
      tryTo: {
        enabled: true
      },
      retryFailedStep: {
        enabled: false
      },
      retryTo: {
        enabled: true
      },
      eachElement: {
        enabled: true
      },
      allure: {},
  
      pauseOnFail: {},

      allure: {
        enabled: true
      }


    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
        pattern: 'wait.*',
        timeout: 0
      },
      {
        pattern: 'amOnPage',
        timeout: 0
      }
    ],
    tests: './*_test.js',
    name: 'sauce-demo'
  }