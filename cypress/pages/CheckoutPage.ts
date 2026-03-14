export function CheckoutPage() {
  const selectors = {
    shoppingCartButton: '[data-test="shopping-cart-link"]',
    firstNameInput: '[data-test="firstName"]',
    lastNameInput: '[data-test="lastName"]',
    postalCodeInput: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    finishButton: '[data-test="finish"]',
    checkoutButton: '[data-test="checkout"]',

    title: '[data-test="title"]',
    ponyExpressImage: '[data-test="pony-express"]',
    completeHeader: '[data-test="complete-header"]',
    completeText: '[data-test="complete-text"]',
    backToProductsButton: '[data-test="back-to-products"]'
  }

  const typeFirstName = (firstName: string) => {
    cy.get(selectors.firstNameInput).clear().type(firstName)
  }

  const typeLastName = (lastName: string) => {
    cy.get(selectors.lastNameInput).clear().type(lastName)
  }

  const typePostalCode = (postalCode: string) => {
    cy.get(selectors.postalCodeInput).clear().type(postalCode)
  }

  const clickShoppingCartButton = () => {
    cy.get(selectors.shoppingCartButton).click()
  }
  const clickContinueButton = () => {
    cy.get(selectors.continueButton).click()
  }
  const clickFinishButton = () => {
    cy.get(selectors.finishButton).click()
  }

  const clickCheckoutButton = () => {
    cy.get(selectors.checkoutButton).click()
  }

  const clickBackToProductsButton = () => {
    cy.get(selectors.backToProductsButton).click()
  }

  const getTitleText = () => cy.get(selectors.title)
  const getPonyExpressImage = () => cy.get(selectors.ponyExpressImage)
  const getCompleteHeader = () => cy.get(selectors.completeHeader)
  const getCompleteText = () => cy.get(selectors.completeText)

  const fillCheckoutForm = (
    firstName: string,
    lastName: string,
    postalCode: string
  ) => {
    typeFirstName(firstName)
    typeLastName(lastName)
    typePostalCode(postalCode)
  }

  return {
    fillCheckoutForm,

    typeFirstName,
    typeLastName,
    typePostalCode,

    clickShoppingCartButton,
    clickContinueButton,
    clickFinishButton,
    clickBackToProductsButton,
    clickCheckoutButton,

    getTitleText,
    getPonyExpressImage,
    getCompleteHeader,
    getCompleteText
  }
}
