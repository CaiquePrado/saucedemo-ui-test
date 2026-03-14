import { ProdcutsPage } from "../pages/ProductsPage"
import { getCredentials } from "../utils/Utils"

describe("Prodcuts tests", () => {
  const productsPage = ProdcutsPage()

  before("login valid user", () => {
    getCredentials().then((credentials) => {
      cy.login(credentials)
    })
  })

  it.only("products test", () => {
    productsPage.getProductsTitle().should("be.visible").contains("Products")
    cy.scrollTo("bottom")
  })

  it("add products to cart tests", () => {
    productsPage.getInventoryItems().each((product) => {
      productsPage.getItemName(product).should("be.visible")

      productsPage.getItemPrice(product).should("contain", "$")

      cy.wrap(product).find("button").should("contain", "Add to cart").click()
    })
  })
})
