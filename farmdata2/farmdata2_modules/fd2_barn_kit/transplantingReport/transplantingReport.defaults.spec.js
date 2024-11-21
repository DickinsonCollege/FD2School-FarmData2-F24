// Tests the default contents of the Transplanting Report in the BarnKit
describe('Checks default contents of the Transplanting Report', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/transplantingReport')

        // Wait here for the maps to load in the page.   
        cy.waitForPage()
    })

    it('check Transplanting Report Header', () => {
        cy.get('[data-cy=Tr-report]')
        .should('have.text', 'Transplanting Report')
    })

    it('check the page contains a section labeled Set Dates', () => {
        cy.get('[data-cy = set-date-label]').should('have.text', 'Set Dates')
    })

    it('check generate report button', () => {
        cy.get('[data-cy=generate-rpt-btn]')
        .should('have.text', 'Generate Report')
        cy.get('[data-cy=generate-rpt-btn]')
        .should('be.enabled')
    })

    it('should have the default start date as the first day of the current year', () => {
        const currentYear = new Date().getFullYear();
        const firstDayOfYear = `${currentYear}-01-01`;
        cy.get('[data-cy=start-date-select]')
        .children()
        .should('have.value', firstDayOfYear);
    });

    it('check the end date is the current date', () => {
        const currentDate = new Date().toISOString().split('T')[0];
        cy.get('[data-cy=end-date-select]')
        .children()
        .should('have.value', currentDate);
    })

    it('check table\'s existence', () => {
        cy.get('[data-cy=report-table]').should("not.exist");
    })
});

  
