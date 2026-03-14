import { defineConfig } from "cypress"

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on)
    }
  }
})
