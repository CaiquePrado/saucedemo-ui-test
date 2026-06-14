import { ProductsPage } from "../pages/ProductsPage"
import { getCredentials } from "../utils/Utils"

describe("Testes da página de produtos", () => {
  const productsPage = ProductsPage()

  beforeEach("Realizar login com usuário válido", () => {
    getCredentials().then((credentials) => {
      cy.login(credentials)
    })
  })

  const extractPricesAndValidateOrder = (
    sortFunction: (a: number, b: number) => number
  ) => {
    const extractedPrices: number[] = []

    productsPage
      .getInventoryItems()
      .each(($item: JQuery<HTMLElement>) => {
        productsPage.getItemPrice($item).then(($price: JQuery<HTMLElement>) => {
          const priceNumber = parseFloat($price.text().replace("$", "").trim())
          extractedPrices.push(priceNumber)
        })
      })
      .then(() => {
        const expectedSortedPrices = [...extractedPrices].sort(sortFunction)
        expect(extractedPrices).to.deep.equal(expectedSortedPrices)
      })
  }

  it("Deve ordenar os produtos por preço: do menor para o maior", () => {
    productsPage
      .getProductsTitle()
      .should("be.visible")
      .and("contain", "Products")

    productsPage.getSortDropdown().select("lohi")
    extractPricesAndValidateOrder((a, b) => a - b)
  })

  it("Deve ordenar os produtos por preço: do maior para o menor", () => {
    productsPage
      .getProductsTitle()
      .should("be.visible")
      .and("contain", "Products")

    productsPage.getSortDropdown().select("hilo")
    extractPricesAndValidateOrder((a, b) => b - a)
  })
})
