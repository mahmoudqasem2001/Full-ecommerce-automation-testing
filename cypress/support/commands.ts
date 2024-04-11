/// <reference types="cypress" />

import LoginPage from "./pageObjects/LoginPage";

export { };

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      logout: () => Chainable<any>;
      login: (email: string, password: string) => Chainable<any>;
      getDataTest: (selector: string) => Chainable<any>;
      getBySelLike: (selector: string) => Chainable<any>;

    }
  }

}


Cypress.Commands.add("getDataTest", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
  return cy.get(`[data-test*=${selector}]`, ...args);
});

const loginPage = new LoginPage();
function login(email: string, password: string) {
  loginPage.actions.enterEmail(email);
  loginPage.actions.enterPassword(password);
  loginPage.actions.clickLogin();

}


// Cypress.Commands.add('logout', logout)
Cypress.Commands.add('login', login)