export default class CartPage {
    URLs = {
        page: '/checkout',
    }

    elements = {
        cartQuantity: () => cy.getDataTest('cart-quantity'),

        cartTable: () => cy.get('table'),

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

    }
}