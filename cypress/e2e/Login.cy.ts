import { faker } from "@faker-js/faker"
import "cypress-axe"
import { LoginPage } from "../pages/LoginPage"
import { ProductsPage } from "../pages/ProductsPage"
import { getCredentials } from "../utils/Utils"

describe("Testes da página de login", () => {
  let loginPage: ReturnType<typeof LoginPage>
  const productPage = ProductsPage()

  const usuarioInvalido = faker.person.fullName()
  const senhaInvalida = faker.internet.password()

  beforeEach(() => {
    loginPage = LoginPage()
  })

  it("Deve realizar login com sucesso utilizando credenciais válidas", () => {
    getCredentials().then((credentials) => {
      cy.login(credentials)
    })

    productPage.getProductsTitle().should("be.visible").contains("Products")
  })

  it("Deve exibir mensagem de erro ao informar usuário inválido", () => {
    cy.login({
      username: usuarioInvalido,
      password: senhaInvalida
    })

    loginPage
      .getErrorMessage()
      .should("be.visible")
      .and(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      )
  })
})
