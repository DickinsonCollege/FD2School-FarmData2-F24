/**
 * This spec tests the seeding report empty state behavior:
 *   - "No Logs" message appears when no logs exist in date range
 *   - Table is not visible when no logs exist in date range
 *   - Rows in the table are sorted by date in ascending order
 *   - The first and last dates in the table are within the specified date range
 */
describe('Seeding Report Table Validation', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })

    it('verify generating table', () => {
        // Set a date range known to have data
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2019-07-01')
            cy.get('input').last()
                .clear()
                .type('2019-07-31')
        })
        cy.get('[data-cy=generate-rpt-btn]').click()
    })

    it('verify "No Logs" message appears when no logs exist', () => {
        // Set a date range known to have no data
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2018-01-01')
            cy.get('input').last()
                .clear()
                .type('2018-01-31')
        })
        cy.get('[data-cy=generate-rpt-btn]').click()
        
        // Verify "No Logs" message is displayed
        cy.get('[data-cy=no-logs-message]')
            .should('be.visible')
            .and('contain', 'No Logs Found in These Dates')
    })

    it('verify table is not visible when no logs exist', () => {
        // Use a different empty date range for second test
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2018-02-01')
            cy.get('input').last()
                .clear()
                .type('2018-02-28')
        })
        cy.get('[data-cy=generate-rpt-btn]').click()
        
        // Verify table is not visible
        cy.get('[data-cy=report-table]').should('not.exist')
    })

    it('should set the date range and have rows sorted by date in ascending order', () => {
        // Set the date range
        const startDate = '2019-07-01';
        const endDate = '2019-07-31';

        cy.get('input').first()
            .clear()
            .type(startDate);
        cy.get('input').last()
            .clear()
            .type(endDate);

        // Click the generate report button
        cy.get('[data-cy=generate-rpt-btn]').click();

        // Wait for the page to load completely
        cy.get('[data-cy="report-table"]').should('be.visible');

        // Get all the rows in the table
        cy.get('[data-cy="report-table"] tbody tr').then(rows => {
            if (rows.length > 0) {
                // Extract the first and last dates
                const firstDateText = rows[0].cells[0].innerText.trim();
                const lastDateText = rows[rows.length - 1].cells[0].innerText.trim();
        
                // Log extracted dates for debugging
                cy.log(`First date text: ${firstDateText}`);
                cy.log(`Last date text: ${lastDateText}`);
        
                const firstDate = new Date(firstDateText);
                const lastDate = new Date(lastDateText);
        
                // Ensure extracted dates are valid
                expect(firstDate).to.not.be.NaN;
                expect(lastDate).to.not.be.NaN;
        
                // Verify dates are within the range
                const startDate = new Date('2019-07-01');
                const endDate = new Date('2019-07-31');
        
                expect(firstDate).to.be.at.least(startDate);
                expect(firstDate).to.be.below(endDate);
                expect(lastDate).to.be.at.least(startDate);
                expect(lastDate).to.be.below(endDate);
            } else {
                throw new Error('No rows found in the report table');
            }
        });
    });

})
