type Credentials = {
  username: string
  password: string
}

export const getCredentials = (): Cypress.Chainable<Credentials> => {
  return cy.env(["username", "password"]).then((env) => {
    return {
      username: env.username as string,
      password: env.password as string
    }
  })
}

export function terminalLog(violations: any[]) {
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      seletores: nodes.map((node: any) => node.target.join(", ")).join(" | ")
    })
  )
  console.table(violationData)
}
