/// <reference types="cypress" />

describe("Sign up and join user group", () => {
  let ctx = {};
  before(() => {
    cy.fixture("users").then((usersJson) => {
      ctx.primaryUser = usersJson[0];
    });
  });

  it("sign up as a user and join a user group", () => {
    cy.signUpWithCognitoUI(
      ctx.primaryUser.email,
      Cypress.env("testUserPassword")
    );
    cy.visit("/");
  });
});
