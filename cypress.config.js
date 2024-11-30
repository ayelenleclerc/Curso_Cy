const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    experimentalStudio: true,
    reporter: 'cypress-mochawesome-reporter',
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
       require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
