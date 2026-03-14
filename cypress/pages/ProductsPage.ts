export function ProdcutsPage() {
  const selectors = {
    productsTitle: '[data-test="title"]',
    inventoryItems: '[data-test="inventory-item"]',
    itemName: '[data-test="inventory-item-name"]',
    itemPrice: '[data-test="inventory-item-price"]'
  }

  const getInventoryItems = () => cy.get(selectors.inventoryItems)
  const getProductsTitle = () => cy.get(selectors.productsTitle)
  const getItemName = (item: JQuery<HTMLElement>) =>
    cy.wrap(item).find(selectors.itemName)
  const getItemPrice = (item: JQuery<HTMLElement>) => {
    return cy.wrap(item).find(selectors.itemPrice)
  }

  return {
    getInventoryItems,
    getItemName,
    getItemPrice,
    getProductsTitle
  }
}
