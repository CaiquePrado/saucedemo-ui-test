export function ProductsPage() {
  const selectors = {
    productsTitle: '[data-test="title"]',
    inventoryItems: '[data-test="inventory-item"]',
    itemName: '[data-test="inventory-item-name"]',
    itemPrice: '[data-test="inventory-item-price"]',
    sortDropdown: '[data-test="product-sort-container"]'
  }

  const getInventoryItems = () => cy.get(selectors.inventoryItems)
  const getProductsTitle = () => cy.get(selectors.productsTitle)
  const getSortDropdown = () => cy.get(selectors.sortDropdown)

  const getItemName = (item: JQuery<HTMLElement>) =>
    cy.wrap(item).find(selectors.itemName)

  const getItemPrice = (item: JQuery<HTMLElement>) => {
    return cy.wrap(item).find(selectors.itemPrice)
  }

  return {
    getInventoryItems,
    getItemName,
    getItemPrice,
    getProductsTitle,
    getSortDropdown
  }
}
