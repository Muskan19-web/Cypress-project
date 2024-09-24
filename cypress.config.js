
const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config) {
  return config
}
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/basic/*.js"
    
      // implement node event listeners here
    
  },
});
