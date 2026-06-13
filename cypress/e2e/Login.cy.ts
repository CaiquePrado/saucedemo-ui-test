import { faker } from "@faker-js/faker"
import "cypress-axe"
import { LoginPage } from "../pages/LoginPage"
import { ProductsPage } from "../pages/ProductsPage"
import { getCredentials } from "../utils/Utils"

describe("Login", () => {
  let loginPage: ReturnType<typeof LoginPage>
  const productPage = ProductsPage()

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
    cy.login({ username: invalidUserName, password: invalidPassword })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      )
  })
})
