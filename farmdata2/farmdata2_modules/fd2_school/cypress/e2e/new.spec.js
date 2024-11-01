describe("Harvest Report Generation", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")  // Log in before each test
        cy.visit("/farm/fd2-school/e2e")   // Visit the page
    })

    it("should generate the Harvest Report", () => {
        cy.get("[data-cy=generate-report-button]").click()
        // Empty it block to set up the structure
    })
    it('should generate and display the report header', () => {
        // Check that the report header does not exist before generating the report
        cy.get('[data-cy=report-header]').should('not.exist');
    
        // Click the "Generate Report" button to generate the report
        cy.get('[data-cy=generate-report-button]').click();
    
      });
      it('should set and display the full farm name when the report is generated', () => {
        // Click the Generate Report button
        cy.get('[data-cy=generate-report-button]').click();

        // Assert that the farm name is displayed correctly with full text
        cy.get('[data-cy=farm-name]').should('have.text', 'Farm: Sample Farm'); // Checks the entire text
    });
     
    it('should display the correct farm name and username when report is generated', () => {
        // Click the Generate Report button
        cy.get('[data-cy=generate-report-button]').click();

        // Assert that the farm name is displayed correctly with partial text
        cy.get('[data-cy=farm-name]').should('contain.text', 'Sample Farm'); // Checks only for "Sample Farm" part

        // Assert that the user name is displayed correctly with partial text
        cy.get('[data-cy=user-name]').should('contain.text', 'manager1'); // Checks only "manager1" part of username text
    });
    it('should display the correct language when the report is generated', () => {
        // Click the Generate Report button
        cy.get('[data-cy=generate-report-button]').click();

        // Assert that the language is displayed exactly as expected
        cy.get('[data-cy=language]').should('have.text', 'English'); // Adjust based on expected value
    });

    
})
