describe('Harvest Report Crop Dropdown', () => {
    beforeEach(() => {
        cy.visit('/farm/fd2-school/fd2');
        cy.get('[data-cy=generate-report-button]').click();
    });

    it('should contain the correct crop options in the dropdown', () => {
        cy.get('[data-cy=crop-dropdown] > [data-cy=dropdown-input]')

            .within(() => {
                cy.get('[data-cy=option0]').should('have.text', 'All');

                cy.get('[data-cy=option1]').should('have.text', 'BROCCOLI');

                cy.get('[data-cy=option4]').should('have.text', 'KALE');

                cy.get('[data-cy=dropdown-input]').children().last().should('have.text', 'ZUCCHINI');
            });

        cy.get('[data-cy=crop-dropdown] > [data-cy=dropdown-input]')
            .children()
            .should('have.length', 6);
    });
});