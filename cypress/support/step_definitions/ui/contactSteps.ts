import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ContactPage from "../../pageObjects/ContactPage";
import LoginPage from "../../pageObjects/LoginPage";
import { devices } from "../../helpers/DeviceDimentions";

const contactPage: ContactPage = new ContactPage();
const loginPage: LoginPage = new LoginPage();

Given('User logged in with valid email as {string} and password as {string} then go to contact page', (email: string, password: string) => {
    cy.visit(loginPage.URLs.page);
    cy.login(email, password);
    cy.wait(3000);
    contactPage.actions.goToContactPage();
    contactPage.actions.checkContactTitle();
});

Given('User go to contact page', () => {
    contactPage.actions.goToContactPage();
    contactPage.actions.checkContactTitle();
});

When('User click on send button', () => {
    contactPage.actions.clickSubmitBTN();

});

Then('Required field should shown error message', () => {
    contactPage.actions.checkAllFieldsAlertRequiredError();

});

When('User fill invalid message less than 50 character as {string} at message fields and click send', (message: string) => {
    contactPage.actions.enterMessage(message);
    contactPage.actions.clickSubmitBTN();
});

Then('An error message should shown by invalid message', () => {
    contactPage.actions.checkShortMessageError();
});

When('User attach a non-empty.txt as {string} file and click send', (fileName: string) => {
    contactPage.actions.attachFile(fileName);
    contactPage.actions.clickSubmitBTN();
});

Then('An error message should shown by invalid file', () => {
    contactPage.actions.checkNonemptyFileError();
});

When('User fill all fields as {string} {string} {string}', (subject: string, message: string, fileName: string) => {
    contactPage.actions.chooseSubject(subject);
    contactPage.actions.enterMessage(message);
    contactPage.actions.attachFile(fileName);
});

When('User fill all fields as {string} {string} {string} on {string} view', (subject: string, message: string, fileName: string, viewport: string) => {
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
    contactPage.actions.chooseSubject(subject);
    contactPage.actions.enterMessage(message);
    contactPage.actions.attachFile(fileName);
});

Then('Successful message should appear', () => {
    contactPage.actions.checkSuccessMessage();
});

