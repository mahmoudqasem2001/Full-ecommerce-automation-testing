import { IUserLoginPayload } from "../../../support/helpers/APIHelpers/payloads/IUserLoginPayload";
import LoginPage from "../../../support/pageObjects/LoginPage";

const loginPage: LoginPage = new LoginPage();

describe('Login API Tests', () => {

    it('should return success for valid credentials', () => {
        const payload: IUserLoginPayload = {
            email: 'invalidemail@example.com',
            password: 'invalidpassword'
        };

        loginPage.apiUserLogin(payload).then((response) => {
            expect(response.status).to.equal(200);
        });
    });

    it('should return error for invalid credentials', () => {
        const payload: IUserLoginPayload = {
            email: 'invalidemail@example.com',
            password: 'invalidpassword'
        };

        loginPage.apiUserLogin(payload).then((response) => {
            expect(response.status).to.equal(401);
        });
    });
});