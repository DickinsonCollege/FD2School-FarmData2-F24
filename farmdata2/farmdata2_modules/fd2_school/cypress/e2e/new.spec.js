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
})
