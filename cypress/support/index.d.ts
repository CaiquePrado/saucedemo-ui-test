declare global {
  namespace Cypress {
    interface Chainable {
      login(options?: { username?: string; password?: string }): Chainable<void>
      addProductToCart(product: string): Chainable<void>
    }
  }
}

export {}
