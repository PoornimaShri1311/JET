const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Inline Reporter",
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: false,
      html: true,
      json: true
    },
    "screenshotOnRunFailure": true,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    baseUrl: "https://careers.justeattakeaway.com/global/en/home",
    excludeSpecPattern: "other/path/to/**/*.js",
    supportFile: false,
    supportFile: "cypress/support/e2e.js",
    specPattern: "**/*.feature",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    video: false,
  },
});
