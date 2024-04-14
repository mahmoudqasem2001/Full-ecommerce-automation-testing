export default class Homepage {
    URLs = {
        page: '/'
    }
    elements = {
        searchInput: () => cy.getDataTest('search-query'),

        searchSubmitBTN: () => cy.getDataTest('search-submit'),

        searchResetBTN: () => cy.getDataTest('search-reset'),

        searchedQueryTitle: () => cy.get('h3').contains('Searched for'),

        noResultFound: () => cy.getDataTest('no-results'),

        searchCompletedContainer: () => cy.getDataTest('search_completed'),

        productName: () => cy.getDataTest('product-name'),

        categoryCheckBoxes: () => cy.getBySelLike('category-'),

        brandCheckBoxes: () => cy.getBySelLike('brand-'),

        sortDropdown: () => cy.getDataTest('sort'),

        productPrice: () => cy.getDataTest('product-price'),



    }

    actions = {
        checkSearchedQueryTitle: (query: string) => this.elements.searchedQueryTitle().should('contain', query),

        clickSearchSubmitBTN: () => this.elements.searchSubmitBTN().click(),

        clickSearchResetBTN: () => this.elements.searchResetBTN().click(),

        enterSearchInput: (query: string) => this.elements.searchInput().clear().type(query),

        checkNoResultFound: (query: string) => {
            this.elements.noResultFound().should('exist').should('be.visible').should('contain', 'No results found.');
            this.elements.searchCompletedContainer().children().should('not.have.attr', 'data-test', 'product-').should('not.contain', query);
        },

        checkResetSearch: () => {
            this.elements.searchInput().should('be.empty');
        },

        checkFilteredProductsAsQuery: (query: string) => this.elements.productName().should('contain', query).should('be.visible'),

        checkBoxesByCategoryId: (index: number) => this.elements.categoryCheckBoxes().eq(index).check(),

        unCheckBoxesByCategoryId: (index: number) => this.elements.categoryCheckBoxes().eq(index).uncheck(),

        checkBoxesByBrandId: (index: number) => this.elements.brandCheckBoxes().eq(index).check(),

        unCheckBoxesByBrandId: (index: number) => this.elements.brandCheckBoxes().eq(index).uncheck(),

        verifyCheckingAllBrandBoxes: () => {
            let brandsNumber = 2
            for (let index = 0; index < brandsNumber; index++) {
                this.elements.brandCheckBoxes().eq(index).should('be.checked');

            }

        },

        verifyCheckingAllCategoryBoxes: () => {
            let categoriesNumber = 19;
            for (let index = 0; index < categoriesNumber; index++) {
                this.elements.categoryCheckBoxes().eq(index).should('be.checked');
            }
        },

        verifyUncheckingAllBrandBoxes: () => {
            let brandsNumber = 2
            for (let index = 0; index < brandsNumber; index++) {
                this.elements.brandCheckBoxes().eq(index).should('not.be.checked');
            }

        },

        verifyUncheckingAllCategoryBoxes: () => {
            let categoriesNumber = 19;
            for (let index = 0; index < categoriesNumber; index++) {
                this.elements.categoryCheckBoxes().eq(index).should('not.be.checked');

            }
        },

        selectSortDropdownOption: (index: number, sortOption: string) => {
            this.elements.sortDropdown().should('exist').should('be.visible');
            this.elements.sortDropdown().select(index).should('contain', sortOption);
            this.elements.sortDropdown().select(index);
        },

        checkSortDropdownOptions: (sortOption: string) => {
            let previousPrice = null;
            let previousText = null;
            let isSorted = true;

            if (sortOption.includes('A - Z')) {
                this.elements.productName()
                    .each((index, child) => {
                        const currentText: string = child.toString();

                        if (previousText !== null && currentText.localeCompare(previousText) < 0) {
                            isSorted = false;
                            return false;
                        }

                        previousText = currentText;
                    });
            } else if (sortOption.includes('Z - A')) {
                this.elements.productName()
                    .each((index, child) => {
                        const currentText: string = child.toString();

                        if (previousText !== null && currentText.localeCompare(previousText) > 0) {
                            isSorted = false;
                            return false;
                        }

                        previousText = currentText;
                    });
            } else if (sortOption.includes('High - Low')) {
                this.elements.productPrice()
                    .each((index, child) => {
                        const currentPrice: number = parseFloat(child.toString());
                        if (previousPrice !== null && currentPrice > previousPrice) {
                            isSorted = false;
                            return false;
                        }

                        previousPrice = currentPrice;
                    });
            } else if (sortOption.includes('Low - High')) {
                this.elements.productPrice()
                    .each((index, child) => {
                        const currentPrice: number = parseFloat(child.toString());

                        if (previousPrice !== null && currentPrice < previousPrice) {
                            isSorted = false;
                            return false;
                        }

                        previousPrice = currentPrice;
                    });
            }

            expect(isSorted).to.be.true;

        },


    }

}

