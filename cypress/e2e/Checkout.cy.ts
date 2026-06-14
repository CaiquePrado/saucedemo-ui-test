import { CheckoutPage } from "../pages/CheckoutPage"
import { getCredentials } from "../utils/Utils"

describe("Testes da página de Checkout", () => {
  const checkoutPage = CheckoutPage()

  beforeEach("Deve realizar login e adicionar produtos ao carrinho", () => {
    getCredentials().then((credentials) => {
      cy.login(credentials)
    })

    cy.addProductToCart("Sauce Labs Backpack")
    cy.addProductToCart("Sauce Labs Bike Light")
  })

  it("Deve finalizar a compra com sucesso ao informar dados válidos do cliente", () => {
    checkoutPage.clickShoppingCartButton()
    checkoutPage.clickCheckoutButton()

    checkoutPage.fillCheckoutForm("user", "standard", "10001-1234")
    checkoutPage.clickContinueButton()

    cy.scrollTo("bottom")
    checkoutPage.clickFinishButton()

    checkoutPage
      .getTitleText()
      .should("be.visible")
      .and("have.text", "Checkout: Complete!")

    checkoutPage.getPonyExpressImage().should("be.visible")

    checkoutPage
      .getCompleteHeader()
      .should("be.visible")
      .and("have.text", "Thank you for your order!")

    checkoutPage
      .getCompleteText()
      .should("be.visible")
      .and(
        "have.text",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      )

    checkoutPage.clickBackToProductsButton()
  })
})
