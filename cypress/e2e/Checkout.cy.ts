import { CheckoutPage } from "../pages/CheckoutPage"
import { getCredentials } from "../utils/Utils"

describe("Checkout flow", () => {
  const checkoutPage = CheckoutPage()

  before("should login and add products to the cart", () => {
    getCredentials().then((credentials) => {
      cy.login(credentials)
    })
  })

  it.only("should complete checkout successfully when valid customer information is provided", () => {
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
