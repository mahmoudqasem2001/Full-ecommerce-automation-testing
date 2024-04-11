export default class ProductPage {
    URLs = {
        page: '/product',
    }
    elements = {
        increaseQuantityBTN: () => cy.getDataTest('increase-quantity'),

        decreaseQuantityBTN: () => cy.getDataTest('decrease-quantity'),

        addToCartBTN: () => cy.getDataTest('add-to-cart'),

        addToFavoritesBTN: () => cy.getDataTest('add-to-favorites'),

        productName: () => cy.getDataTest('product-name'),

        productPrice: () => cy.getDataTest('unit-price'),

        productQuantity: () => cy.getDataTest('quantity'),

        outOfStock: () => cy.getDataTest('out-of-stock'),
    }

    actions = {
        clickIncreaseQuantity: () => this.elements.increaseQuantityBTN().click(),

        clickDecreaseQuantity: () => this.elements.decreaseQuantityBTN().click(),

        clickAddToCart: () => this.elements.addToCartBTN().click(),

        clickAddToFavorites: () => this.elements.addToFavoritesBTN().click(),

        getProductName: () => this.elements.productName(),

        getProductPrice: () => this.elements.productPrice(),

        getProductQuantity: () => this.elements.productQuantity(),

        getOutOfStock: () => this.elements.outOfStock(),

        clickOnProductAt: (index: number) => cy.getBySelLike('product-').eq(index).click(),

    }
}