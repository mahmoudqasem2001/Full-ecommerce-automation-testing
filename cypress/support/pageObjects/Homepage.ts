export default class Homepage {
    URLs = {
        page: '/'
    }
    element = {
        searchInput: () => cy.getDataTest('search-query'),

        searchSubmitBTN: () => cy.getDataTest('search-submit'),

        searchResetBTN: () => cy.getDataTest('search-reset'),

        searchedQueryTitle: () => cy.get('h3').contains('Searched for'),

        noResultFound: () => cy.getDataTest('no-results'),

        searchCompletedContainer: () => cy.getDataTest('search_completed'),

        productName: () => cy.getDataTest('product-name'),

        categoryCheckBoxes: () => cy.getBySelLike('category-'),

        brandCheckBoxes: () => cy.getBySelLike('brand-'),

    }

    actions = {
        checkSearchedQueryTitle: (query: string) => this.element.searchedQueryTitle().should('contain', query),

        clickSearchSubmitBTN: () => this.element.searchSubmitBTN().click(),

        clickSearchResetBTN: () => this.element.searchResetBTN().click(),

        enterSearchInput: (query: string) => this.element.searchInput().clear().type(query),

        checkNoResultFound: (query: string) => {
            this.element.noResultFound().should('exist').should('be.visible').should('contain', 'No results found.');
            this.element.searchCompletedContainer().children().should('not.have.attr', 'data-test', 'product-').should('not.contain', query);
        },

        checkResetSearch: () => {
            this.element.searchInput().should('be.empty');
        },

        checkFilteredProductsAsQuery: (query: string) => this.element.productName().should('contain', query).should('be.visible'),

        // getCurrentItemsCount: () => cy.request('https://api.practicesoftwaretesting.com/products?between=price,1,100&page=0',).then((response) => {
        //     return response.body.total;
        // }),

        checkBoxesByCategoryId: (index: number) => this.element.categoryCheckBoxes().eq(index).check(),

        unCheckBoxesByCategoryId: (index: number) => this.element.categoryCheckBoxes().eq(index).uncheck(),

        checkBoxesByBrandId: (index: number) => this.element.brandCheckBoxes().eq(index).check(),

        unCheckBoxesByBrandId: (index: number) => this.element.brandCheckBoxes().eq(index).uncheck(),

    }

}