describe("Test harvest report generation", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-school/e2e")
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
  })
  

  it("Check farm name, user name, and language are correctly displayed in the report", () => {
    // Click the generate report button
    cy.get('[data-cy=generate-report-button]').click()

    // Assert the farm name is correct
    cy.get('[data-cy=farm-name]')
      .should('contain', 'Sample Farm') // Expected farm name

    // Assert the user name is correct
    cy.get('[data-cy=username]')
      .should('contain', 'manager1') // Expected username

    // Assert the language is correct
    cy.get('[data-cy=language]')
      .should('contain', 'English') // Expected language
  })

  it("Check language is correctly displayed in the report", () => {
    // Click the generate report button
    cy.get('[data-cy=generate-report-button]').click()
  
    // Assert the language is correct using have.text
    cy.get('[data-cy=language]')
      .should('have.text', 'English'); // Expected language
  });
})
