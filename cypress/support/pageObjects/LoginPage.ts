import { IUserLoginPayload } from "../helpers/APIHelpers/payloads/IUserLoginPayload";

export default class LoginPage {
    URLs = {
        page: "/auth/login",
        api: 'https://api.practicesoftwaretesting.com/users/login'
    };

    elements = {
        email: () => cy.getDataTest("email"),

        password: () => cy.getDataTest("password"),

        loginTitle: () => cy.get(".auth-form").children().eq(0),

        loginBTN: () => cy.getDataTest("login-submit"),

        loginError: () => cy.getDataTest("login-error"),

        invalidEmailError: () => cy.getDataTest("email-error"),

        invalidPasswordError: () => cy.getDataTest("password-error"),
    };


    actions = {


        enterEmail: (email: string) => this.elements.email().clear().type(email),

        enterPassword: (password: string) =>
            this.elements.password().clear().type(password),

        checkTitle: () => this.elements.loginTitle().should('be.visible').should('have.text', 'Login'),

        clickLogin: () =>
            this.elements.loginBTN().should("exist").should("be.visible").click({ timeout: 3000 }),

        checkLoginErrorAlert: () => this.elements.loginError().should('have.class', 'alert-danger').should('exist').should('be.visible'),

        checkLoginErrorMessage: () => this.elements.loginError().children().eq(0).should('have.text', 'Invalid email or password'),

        checkInvalidEmailError: () =>
            this.elements
                .invalidEmailError()
                .should("exist")
                .should("be.visible")
                .should("contain", "E-mail format is invalid."),

        checkInvalidPasswordError: () =>
            this.elements.invalidPasswordError().should("exist").should("be.visible").should('contain', 'Password length is invalid'),
    };


    apiUserLogin = (payload: IUserLoginPayload) => {
        return cy.api({
            method: 'POST',
            url: this.URLs.api,
            body: payload,
            failOnStatusCode: false
        },
        );
    }
}
