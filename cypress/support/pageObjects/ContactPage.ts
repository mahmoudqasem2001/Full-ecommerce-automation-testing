export default class ContactPage {
    URLs = {
        page: '/contact'
    }
    elements = {

        contactTitle: () => cy.get('h3').contains('Contact'),

        firstName: () => cy.getDataTest('first-name'),

        lastName: () => cy.getDataTest('last-name'),

        email: () => cy.getDataTest('email'),

        subjects: () => cy.getDataTest('subject'),

        messageInput: () => cy.getDataTest('message'),

        attachment: () => cy.getDataTest('attachment'),

        submitBTN: () => cy.getDataTest('contact-submit'),

        alerts: {

            allFieldRequiredError: () => cy.getBySelLike('-error'),

            messageRequiredError: () => cy.getDataTest('message-error'),

            subjectRequiredError: () => cy.getDataTest('subject-error'),

            successMessage: () => cy.get('div').contains('Thanks for your message! We will contact you shortly.'),

            invalidEmail: () => cy.getDataTest('email-error'),

            shortMessageError: () => cy.getDataTest('message-error'),

            nonemptyFileError: () => cy.getDataTest('attachment-error'),


        }
    }

    actions = {

        checkContactTitle: () => this.elements.contactTitle().should('be.visible').should('contain', 'Contact'),

        enterFirstName: (firstName: string) => this.elements.firstName().clear().type(firstName),

        enterLastName: (lastName: string) => this.elements.lastName().clear().type(lastName),

        enterEmail: (email: string) => this.elements.email().clear().type(email),

        chooseSubject: (item: string) => this.elements.subjects().select(item),

        enterMessage: (message: string) => this.elements.messageInput().clear().type(message),

        attachFile: (fileName: string) => cy.fixture(fileName).then((fileContent) => this.elements.attachment().attachFile({ fileContent: fileContent.toString(), fileName: fileName, mimeType: 'text/plain' }),),

        clickSubmitBTN: () => this.elements.submitBTN().click(),

        checkAllFieldsAlertRequiredError: () => this.elements.alerts.allFieldRequiredError().should('contain', 'is required').should('have.length', 5),

        checkSubjectAlertRequiredError: () => this.elements.alerts.subjectRequiredError().should('be.visible').should('contain', 'Subject is required'),

        checkMessageAlertRequiredError: () => this.elements.alerts.messageRequiredError().should('be.visible').should('contain', 'Message is required'),

        checkShortMessageError: () => this.elements.alerts.shortMessageError().should('be.visible').should('contain', 'Message must be minimal 50 characters'),

        checkNonemptyFileError: () => this.elements.alerts.nonemptyFileError().should('be.visible').should('contain', 'File should be empty.'),

        checkSuccessMessage: () => this.elements.alerts.successMessage().should('be.visible'),

        goToContactPage: () => cy.visit(this.URLs.page),
    }
}