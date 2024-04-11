export default class MyAccountPage{

    URLs= {
        page : '/account',
    }

    elements ={
        myAccountTitle: ()=> cy.getDataTest('page-title'), 

    }

    actions ={
        checkMyAccountTitle:  ()=> this.elements.myAccountTitle().should('be.visible').should('contain', 'My account'), 
        checkUrl: ()=> cy.url().should('contain', this.URLs.page),  
    }
}