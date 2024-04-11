import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pageObjects/LoginPage";
import ProductPage from "../../pageObjects/ProductPage";
import CartPage from "../../pageObjects/CartPage";
import Homepage from "../../pageObjects/Homepage";

const loginPage: LoginPage = new LoginPage();
const productPage: ProductPage = new ProductPage();
const cartPage: CartPage = new CartPage();
const homepage: Homepage = new Homepage();



Given('User Logged in with email as {string} and password as {string}', (email: string, password: string) => {
    cy.visit(loginPage.URLs.page);
    cy.login(email, password).as('login');
});

When('Go to cart page', () => {
    cy.visit(cartPage.URLs.page);
    cartPage.actions.checkCartPageNavigation();
})

When('Check cart is empty', () => {
    cartPage.actions.checkCartEmpty();
});

When('Add {string} products to cart and check if added on cart page', (count: string,) => {
    for (let i = 0; i < parseInt(count); i++) {
        cy.visit(homepage.URLs.page, { timeout: 5000 }).then(() => {
            productPage.actions.clickOnProductAt(i);
            productPage.actions.clickAddToCart();
        });


    }
});

Then('Products added should shown on cart page', () => {
    cy.visit(cartPage.URLs.page);
    cartPage.actions.checkCartPageNavigation();

    cy.fixture('cartItems.json').then((cartItems) => {
        for (let index = 0; index < cartItems.length; index++) {
            cartPage.actions.checkCartItems(cartItems[index].item, cartItems[index].quantity, cartItems[index].price);

        }
    });
});


When('User add item {string} to cart', (item: string) => {

});

When('User click on delete item {string} button', (item: string) => {

})

When('item {string} should be deleted from the cart and cart count should decrease', (item: string) => {

})