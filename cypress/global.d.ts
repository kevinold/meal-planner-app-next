/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getBySel(dataTestAttribute: string, args?: any): Chainable<Element>;
    getBySelLike(
      dataTestPrefixAttribute: string,
      args?: any
    ): Chainable<Element>;
    /**
     * Logs-in user by using Amplify Authenticator tied to Cognito
     */
    loginWithCognitoUI(username: string, password: string): void;
  }
}
