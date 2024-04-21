import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { IUserLoginPayload } from "../../helpers/APIHelpers/payloads/IUserLoginPayload";
import LoginPage from "../../pageObjects/LoginPage";
import { ApiResponseBody } from "cypress-plugin-api";

const loginPage: LoginPage = new LoginPage();

Given('The endpoint url to login page', () => {

});

When('Make POST request with body has {string} and {string}', (email: string, password: string) => {
    const payload: IUserLoginPayload = {
        email: email,
        password: password,
    };

    loginPage.apiUserLogin(payload).as('loginResponse');
});

Then('The api should return an error message saying {string} and a status of {string}', (errorMessage: string, statusCode: string) => {
    cy.get<ApiResponseBody>('@loginResponse').then((response) => {

        expect(response.status).to.equal(parseInt(statusCode));
        expect(response.body['error']).to.equal(errorMessage);
    });
})

Then('The api should return a response have token type {string} and expires_in {string} with status of {string}', (token_type: string, expiresPeriod: string, statusCode: string) => {

    cy.get<ApiResponseBody>('@loginResponse').then((response) => {
        expect(response.status).to.equal(parseInt(statusCode));
        expect(response.body).to.be.a("object");
        expect(response.body['access-token']).to.be.a("string").to.not.empty;
        expect(response.body['expires_in']).to.be.a('number').be.not.empty.equal(parseInt(expiresPeriod));
        expect(response.body['token_type']).to.be.a('string').to.not.empty.equal(token_type);
    });
})

