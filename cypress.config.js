const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({

  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    setupNodeEvents(on, config) {
      allureCypress(on);

    },
  },
});
