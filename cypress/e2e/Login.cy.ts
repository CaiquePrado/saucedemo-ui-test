import { faker } from "@faker-js/faker"
import "cypress-axe"
import { LoginPage } from "../pages/LoginPage"
import { ProdcutsPage } from "../pages/ProductsPage"
import { getCredentials } from "../utils/Utils"

describe("Login", () => {
  let loginPage: ReturnType<typeof LoginPage>
  const productPage = ProdcutsPage()

  const invalidUserName = faker.person.fullName()
  const invalidPassword = faker.internet.password()

  beforeEach(() => {
    loginPage = LoginPage()
  })

  it("should login successfully with valid credentials", () => {
    getCredentials().then((credentials) => {
      cy.login(credentials)
    })
    productPage.getProductsTitle().should("be.visible").contains("Products")
  })

  it("should display an error message when the username is invalid", () => {
    cy.login({ username: invalidUserName, password: "secret_sauce" })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      )
  })

  it("should display an error message when the password is invalid", () => {
    cy.login({ username: "standard_user", password: invalidPassword })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      )
  })

  it("should display an error message when the username is not provided", () => {
    cy.login({ password: "secret_sauce" })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and("contain.text", "Epic sadface: Username is required")
  })

  it("should display an error message when the password is not provided", () => {
    cy.login({ username: "standard_user" })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and("contain.text", "Epic sadface: Password is required")
  })

  it("should display an error message when both username and password are not provided", () => {
    cy.login({ username: "", password: "" })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and("contain.text", "Epic sadface: Username is required")
  })

  // it("deve validar a acessibilidade da página de login", () => {
  //   cy.visit("/")

  //   cy.injectAxe()

  //   cy.checkA11y(undefined, undefined, terminalLog)
  // })
})
