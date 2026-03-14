export function LoginPage() {
  const selectors = {
    usernameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]'
  }

  const typeUsername = (username: string) => {
    cy.get(selectors.usernameInput).clear().type(username)
  }

  const typePassword = (password: string) => {
    cy.get(selectors.passwordInput).clear().type(password)
  }

  const clickLogin = () => {
    cy.get(selectors.loginButton).click()
  }

  const getErrorMessage = () => {
    return cy.get(selectors.errorMessage)
  }

  const login = ({
    username,
    password
  }: { username?: string; password?: string } = {}) => {
    if (username) typeUsername(username)
    if (password) typePassword(password)

    clickLogin()
  }

  return {
    login,
    getErrorMessage,
    selectors
  }
}
