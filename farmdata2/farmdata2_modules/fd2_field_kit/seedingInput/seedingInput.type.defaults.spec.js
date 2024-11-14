/**
 * 
 */

describe('Test the default contents of the "Seeding Type" section of the Seeding Input Form in the FieldKit.', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })

    it('Check that there is an element for Tray and Direct and that they are enabled', () => {
        cy.get("[data-cy=tray-seedings]")
            .should("be.enabled")
        cy.get("[data-cy=direct-seedings]")
            .should("be.enabled")
        
    })

    it('Check that neither the Tray or Direct elements are selected, and that the message indicating one but be selected is visible', () => {
        cy.get("[data-cy=tray-seedings]")
            .should("not.be.checked")
        cy.get("[data-cy=direct-seedings]")
            .should("not.be.checked")
        
        cy.get('div')
        .contains('Please Select Tray Seeding or Direct Seeding')
        .should('be.visible')
    })

    it('Check that neither form elements for the Tray and Direct seedings are visible', () => {
        // Check Tray seeding elements are not visible
        cy.get('[data-cy=tray-area-selection]')
            .should('not.be.visible')
        cy.get('[data-cy=num-cell-input]')
            .should('not.be.visible')
        cy.get('[data-cy=num-tray-input]')
            .should('not.be.visible')
        cy.get('[data-cy=num-seed-input]')
            .should('not.be.visible')

        // Check Direct seeding elements are not visible
        cy.get('[data-cy=direct-area-selection]')
            .should('not.be.visible')
        cy.get('[data-cy=num-rowbed-input]')
            .should('not.be.visible')
        cy.get('[data-cy=num-feet-input]')
            .should('not.be.visible')

    })


})
