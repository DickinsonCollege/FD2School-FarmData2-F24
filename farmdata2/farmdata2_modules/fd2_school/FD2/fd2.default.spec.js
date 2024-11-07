// Initial setup (Steps 33-34)
describe('Test the harvest report table', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-school/fd2')
    })

    // Test header text and column count (Steps 34-37)
    it('should verify table headers and column count', () => {
        // Generate report to make table appear
        cy.get('[data-cy=generate-report-button]')
            .click()

        // Wait for table to be present
        cy.get('[data-cy=harvest-table]')
            .should('exist')

        // Check headers
        cy.get('[data-cy=h0]').should('have.text', 'Date')
        cy.get('[data-cy=h1]').should('have.text', 'Area')
        cy.get('[data-cy=h2]').should('have.text', 'Crop')
        cy.get('[data-cy=h3]').should('have.text', 'Yield')
        cy.get('[data-cy=h4]').should('have.text', 'Units')

        // Check column count using header-row
        cy.get('[data-cy=header-row]')
            .children()
            .should('have.length', 5)
    })

    // Test crop filtering (Step 38)
    it('should filter table by crop correctly', () => {
        // Generate initial report
        cy.get('[data-cy=generate-report-button]')
            .click()

        // Wait for table to be present
        cy.get('[data-cy=harvest-table]')
            .should('exist')

        // Select BEETS from dropdown
        cy.get('[data-cy=crop-select] > [data-cy=dropdown-input]')
            .select('BEETS')

        // Generate report again to apply filter
        cy.get('[data-cy=generate-report-button]')
            .click()

        // Check table body rows
        cy.get('[data-cy=table-body]')
            .find('tr')
            .should('have.length.gt', 0)
            .each(($row) => {
                // Check that each row's crop cell contains BEETS
                cy.wrap($row)
                    .find('[data-cy^=cell]') // Find cells in this row
                    .eq(2)  // Crop column (index 2)
                    .should('contain', 'BEETS')
            })
    })
})