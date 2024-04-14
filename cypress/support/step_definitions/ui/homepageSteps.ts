import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../../pageObjects/Homepage";

const homepage: Homepage = new Homepage();

Given('User open website at homepage', () => {
    cy.visit(homepage.URLs.page).as('homepage');
});

When('User select option with index as {string} and sortOption as {string} from sort option', (index: string, sortOption: string) => {
    homepage.actions.selectSortDropdownOption(parseInt(index), sortOption);
});

Then('Data items should be sorted as {string} option', (sortOption: string) => {
    homepage.actions.checkSortDropdownOptions(sortOption);
});

When('User Enter input data as {string} and click on search button', (query: string) => {
    homepage.actions.enterSearchInput(query);
    homepage.actions.clickSearchSubmitBTN();
});


Then('Data items should be filtered as query {string}', (query: string) => {
    homepage.actions.checkSearchedQueryTitle(query);
    homepage.actions.checkFilteredProductsAsQuery(query);
});

When('Click on reset search button', () => {
    homepage.actions.clickSearchResetBTN();
});

Then('Data Items should Reset search filtering', () => {
    homepage.actions.checkResetSearch();
});

Then('No result found message should shown and empty items list for {string} query', (query: string) => {
    homepage.actions.checkSearchedQueryTitle(query);
    homepage.actions.checkNoResultFound(query);
});

When('User check or uncheck any number of boxes', () => {
    let brandsNumber = 2
    for (let index = 0; index < brandsNumber; index++) {
        homepage.actions.checkBoxesByBrandId(index);
    }
    homepage.actions.verifyCheckingAllBrandBoxes();

    for (let index = 0; index < brandsNumber; index++) {
        homepage.actions.unCheckBoxesByBrandId(index);
    }
    homepage.actions.verifyUncheckingAllBrandBoxes();

    let categoriesNumber = 19;
    for (let index = 0; index < categoriesNumber; index++) {
        homepage.actions.checkBoxesByCategoryId(index);
    }
    homepage.actions.verifyCheckingAllCategoryBoxes();

    for (let index = 0; index < brandsNumber; index++) {
        homepage.actions.unCheckBoxesByCategoryId(index);
    }
    homepage.actions.verifyUncheckingAllCategoryBoxes();

});

When('User check boxes by category name or brand name', () => {
      
});

Then('checkboxes are checked or unchecked', () => {
  homepage.actions.verifyUncheckingAllBrandBoxes(); 
  homepage.actions.verifyUncheckingAllCategoryBoxes();

});

Then('All sub checkboxes should checked', () => {

});

When('User check any box with index {string}', (index: string) => {
    cy.get('@homepage').then(() => {
        homepage.actions.checkBoxesByCategoryId(parseInt(index));

    })

});
Then('Data items should filtered as checked query {string}', (query: string) => {
    homepage.actions.checkFilteredProductsAsQuery(query);

});