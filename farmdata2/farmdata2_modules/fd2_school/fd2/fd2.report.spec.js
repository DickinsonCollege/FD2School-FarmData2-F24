describe('Harvest Report Details Section', () => {
    beforeEach(() => {
        cy.visit('/farm/fd2-school/fd2');
    });

    it('should display default details before generating the report', () => {
        cy.get('[data-cy="page-header"]').should('contain', 'Harvest Report');

        cy.get('[data-cy="farm-name"]').should('contain', 'Sample Farm');
        cy.get('[data-cy="user-name"]').should('contain', 'manager1');
        cy.get('[data-cy="language"]').should('contain', 'English');
    });

    it('should display updated details after generating the report', () => {
        cy.get('#title').clear().type('My Sample Harvest Report');
        cy.get('[data-cy="start-date"]').type('2020-05-05');
        cy.get('[data-cy="end-date"]').type('2020-05-15');
        cy.get('[data-cy="crop_dropdown"]').select('kale');

        cy.get('[data-cy="generate-report-button"]').click();

        cy.get('[data-cy="farm-name"]').should('not.contain', 'Sample Farm'); 
        cy.get('[data-cy="user-name"]').should('not.contain', 'manager1'); 
        cy.get('[data-cy="language"]').should('not.contain', 'English'); 
    });

    it('should display table data when there are matching records', () => {
        cy.get('[data-cy="start-date"]').type('2020-05-05');
        cy.get('[data-cy="end-date"]').type('2020-05-15');
        cy.get('[data-cy="crop_dropdown"]').select('kale');

        cy.get('[data-cy="generate-report-button"]').click();

        cy.get('table').should('exist');
        cy.get('table tr').should('have.length.greaterThan', 1); 
    });

    it('should display "No Matching Records" when there are no matching records', () => {
        cy.get('[data-cy="start-date"]').type('2021-01-01');
        cy.get('[data-cy="end-date"]').type('2021-01-02');
        cy.get('[data-cy="crop_dropdown"]').select('corn');

        cy.get('[data-cy="generate-report-button"]').click();

        cy.contains('No Matching Records').should('be.visible');
    });
});