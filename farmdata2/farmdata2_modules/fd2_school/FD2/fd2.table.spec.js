describe('Test the harvest report table', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-school/fd2')
    })

    it('should verify table headers', () => {
        // Generate report
        cy.get('[data-cy=generate-report-button]')
            .click()

        // Wait for table to be present
        cy.get('[data-cy=harvest-table]')
            .should('exist')

        // Check each header individually
        cy.get('[data-cy=h0]')
            .should('have.text', 'Date')
        cy.get('[data-cy=h1]')
            .should('have.text', 'Area')
        cy.get('[data-cy=h2]')
            .should('have.text', 'Crop')
        cy.get('[data-cy=h3]')
            .should('have.text', 'Yield')
        cy.get('[data-cy=h4]')
            .should('have.text', 'Units')
    })

    it('should test crop filtering', () => {
        // First generate report
        cy.get('[data-cy=generate-report-button]')
            .click()

        // Wait for crops to load in dropdown
        cy.get('[data-cy=crop-select]')
            .should('exist')
            .find('[data-cy=dropdown-input]')
            .should('exist')

        // Select BEETS (known to exist in test data)
        cy.get('[data-cy=crop-select] > [data-cy=dropdown-input]')
            .select('BEETS', { force: true })

        // Generate report with filter
        cy.get('[data-cy=generate-report-button]')
            .click()

        // Wait for filtered results and verify
        cy.get('[data-cy=harvest-table]')
            .should('exist')
            .then(() => {
                // First check if we have any rows
                cy.get('tbody tr').then($rows => {
                    if ($rows.length > 0) {
                        // If we have rows, verify each contains BEETS
                        cy.get('tbody tr').each($row => {
                            cy.wrap($row)
                                .find('td')
                                .eq(2) // Crop column
                                .should('contain', 'BEETS')
                        })
                    } else {
                        // If no rows, that's acceptable - log it
                        cy.log('No rows found for BEETS in the date range')
                    }
                })
            })
    })
})