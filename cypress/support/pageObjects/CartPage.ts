export default class CartPage {
    URLs = {
        page: '/checkout',
    }

    elements = {
        cartQuantity: () => cy.getDataTest('cart-quantity'),

        cartTable: () => cy.get('table'),

        proceedOne: () => cy.getDataTest('proceed-1'),

        proceedTwo: () => cy.getDataTest('proceed-2'),

        proceedThree: () => cy.getDataTest('proceed-3'),

        alreadySignInText: () => cy.get('app-login p'),

        confirmPayment: () => cy.getDataTest('finish'),

        alerts: {
            successfulPayment: () => cy.get('.alert').contains('Payment was successful'),
        }

    }

    actions = {
        getCartQuantity: () => this.elements.cartQuantity(),

        getCartTable: () => this.elements.cartTable(),

        checkCartPageNavigation: () => cy.get('app-checkout').should('contain', 'Cart'),

        checkCartEmpty: () => cy.get('app-cart').should('contain', 'The cart is empty. Nothing to display.'),

        checkCartItems: (item: string, quantity: string, price: string) => {
            cy.get('table.table-hover tbody tr').should('have.length.gt', 0);

            cy.get('table.table-hover tbody tr').each(($row) => {
                cy.wrap($row).find('.product-title').should('contain', item);
                cy.wrap($row).find('input[type="number"]').should('have.value', quantity);
                cy.wrap($row).find('span').eq(0).should('contain', price);
            });
        },

        checkAlreadySignInStep: () => this.elements.alreadySignInText().should('contain', 'you are already logged in. You can proceed to checkout'),

        clickOnProceedOneCartBTN: () => this.elements.proceedOne().should('exist').and('be.visible').click(),

        clickOnProceedTwoSignInBTN: () => this.elements.proceedTwo().should('exist').and('be.visible').click(),

        clickOnProceedThreeAddressBTN: () => this.elements.proceedThree().should('exist').and('be.visible').click(),

        clickOnConfirmPaymentBTN: () => this.elements.confirmPayment().should('exist').and('be.visible').click(),

    }
}