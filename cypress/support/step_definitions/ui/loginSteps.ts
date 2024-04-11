import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/LoginPage";
import MyAccountPage from "../../pageObjects/MyAccountPage";

const loginPage: LoginPage = new LoginPage();
const myAccountPage: MyAccountPage = new MyAccountPage();

Given('User open the website and go to login page', () => {
    cy.visit(loginPage.URLs.page);
    loginPage.actions.checkTitle();
});


When('User fill email as {string} and {string} and click on login', (email: string, password: string) => {
    cy.login(email, password).as('login');
});

Then('User should navigate to home page', () => {
    cy.wait(3000);
    myAccountPage.actions.checkUrl();
    myAccountPage.actions.checkMyAccountTitle();

});


Then('Error message should appear', () => {
    loginPage.actions.checkLoginErrorMessage();
    loginPage.actions.checkLoginErrorAlert();
});


Then('Error message should appear in {string} view', (viewport: string) => {
    switch (viewport) {
        case 'desktop':
            cy.viewport(1366, 768);
            break;
        case 'mobile':
            cy.viewport('iphone-6');
            break;
        case 'tablet':
            cy.viewport('ipad-2');
            break;
        default:
            throw new Error(`Unsupported viewport mode: ${viewport}`);
    }
    loginPage.actions.checkLoginErrorMessage();
    loginPage.actions.checkLoginErrorAlert();
});