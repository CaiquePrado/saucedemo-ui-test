import { LoginPage } from "../pages/LoginPage"

Cypress.Commands.add("login", ({ username, password } = {}) => {
  const loginPage = LoginPage()

  cy.visit("/")
  loginPage.login({ username, password })
})
Cypress.Commands.add("addProductToCart", (product) => {
  cy.get(`[data-test="add-to-cart-${product}"]`).click()
})
