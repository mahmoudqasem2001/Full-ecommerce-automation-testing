import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pageObjects/ProductPage";
import CartPage from "../../pageObjects/CartPage";
import LoginPage from "../../pageObjects/LoginPage";

const productPage: ProductPage = new ProductPage();
const cartPage: CartPage = new CartPage();
const loginPage: LoginPage = new LoginPage();

Given('User open the website and go to product page', () => {
    cy.visit('/');
    cy.getBySelLike('product-').first().click().then(() => {
        productPage.actions.getProductName().should('exist').should('have.text', 'Combination Pliers');
    })
});



When('User choose number of items and click on add to cart button', () => {
    productPage.actions.clickIncreaseQuantity();
    productPage.actions.clickAddToCart().then(() => {
        cy.get('.toast-body')
            .contains('Product added to shopping cart.').should('exist').as('successCart');

    });

    // cy.visit(cartPage.URLs.page);
    // cartPage.actions.getCartTable().within(() => {
    //     cy.get('tr')
    //         .first()
    //         .then(($row) => {
    //             cy.wrap($row).should('contain', 'Combination Pliers');
    //         });
    // });

    // cartPage.actions.getCartTable()
    //     .find('tbody tr')
    //     .first()
    //     .find('input.quantity')
    //     .invoke('val')
    //     .then((quantityValue: string) => {
    //         const numericValue = parseInt(quantityValue);
    //         expect(numericValue).equal(2);
    //     });



});

Given('User open the website and go to out of stock product page', () => {
    cy.visit('/');
    productPage.actions.getOutOfStock()
        .click();
});

When('User trying click on increase, decrease, add to cart buttons still disabled', () => {
    productPage.actions.getOutOfStock().contains('Out of stock').should('exist').should('be.visible');
    productPage.elements.decreaseQuantityBTN().should('be.disabled');
    productPage.elements.increaseQuantityBTN().should('be.disabled');
    productPage.elements.addToCartBTN().should('be.disabled');

})


Then('Successful adding item alert should shown', () => {
    cy.get('@successCart');
});

When('check the default quantity equal to one', () => {
    let currentQuantity = 0;

    productPage.actions.getProductQuantity().invoke('attr', 'min')
        .then((minValue) => {
            currentQuantity = parseInt(minValue, 10);
            expect(currentQuantity).to.be.a('number');
            expect(currentQuantity).to.be.at.least(1);
        });

})

When('User clicks on increase quantity button', () => {
    productPage.actions.clickIncreaseQuantity();
});


Then('quantity number should have increased to two', () => {
    productPage.actions.getProductQuantity()
        .invoke('val')
        .then((value) => {
            const numericValue = parseInt(value)
            expect(numericValue).equal(2);
        });
});

When('check the quantity equal to two', () => {
    productPage.actions.getProductQuantity()
        .invoke('val')
        .then((value) => {
            const numericValue = parseInt(value)
            expect(numericValue).equal(2);
        });
})

When('User clicks on decrease quantity button', () => {
    productPage.actions.clickDecreaseQuantity();
});


Then('quantity number should have decreased to one', () => {
    productPage.actions.getProductQuantity()
        .invoke('val')
        .then((value) => {
            const numericValue = parseInt(value)
            expect(numericValue).equal(1);
        });
});



Given('User has logged in with email as {string} and password as {string} and go to product page', (email: string, password: string) => {
    cy.visit(loginPage.URLs.page);
    cy.login(email, password);
    cy.visit('/');
    cy.getBySelLike('product-').first().click().then(() => {
        productPage.actions.getProductName().should('exist').should('have.text', 'Combination Pliers');
    });

});

When('User clicks on add to favorites button', () => {
    productPage.actions.clickAddToFavorites()
        .then(() => {
            cy.get('.toast-body')
                .should('exist').as('addToFavorite');

        });
});

Then('Successful adding item alert should shown', () => {
    cy.get('@addToFavorite').contains('Product added to your favorites list.').should('exist').should('be.visible');
});


Then('warning alert should shown that item already exist in favorites', () => {
    productPage.actions.clickAddToFavorites()
        .then(() => {
            cy.get('.toast-body')
                .contains('Product already in your favorites list.').should('exist').should('be.visible');

        });

});

Then('error alert should shown', () => {
    cy.get('@addToFavorite').contains('Unauthorized, can not add product to your favorite list.').should('exist').should('be.visible');
})