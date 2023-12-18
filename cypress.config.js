const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    specPattern: "cypress/e2e/**/*.js",
    //"cypress/e2e/**/*.test.js" ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
