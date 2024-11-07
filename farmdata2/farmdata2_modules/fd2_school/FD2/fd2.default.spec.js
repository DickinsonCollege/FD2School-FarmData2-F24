describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text", "Harvest Report")
    })

    it("Verify default values for date inputs", () => {
        cy.get("[data-cy=start-date]")
            .should("have.value", "2020-05-05")
        cy.get("[data-cy=end-date]")
            .should("have.value", "2020-05-15")
    })

    it('should find the crop dropdown element', () => {
        cy.get('[data-cy=crop-select]')
            .should('exist')
    })
    
    it("Check the crop dropdown", () => {
        // Wait for dropdown to exist and be populated
        cy.get('[data-cy=crop-select]')
            .should('exist')
            .find('[data-cy=dropdown-input]')
            .should('exist')

        // Check first option is 'All'
        cy.get("[data-cy=crop-select] > [data-cy=dropdown-input] > [data-cy=option0]")
            .should("have.text", "All")

        // Check second option is 'ARUGULA'
        cy.get("[data-cy=crop-select] > [data-cy=dropdown-input] > [data-cy=option1]")
            .should("have.text", "ARUGULA")

        // Check fifth option is 'BEAN-DRY'
        cy.get("[data-cy=crop-select] > [data-cy=dropdown-input] > [data-cy=option4]")
            .should("have.text", "BEAN-DRY")

        // Verify total number of options
        cy.get("[data-cy=crop-select] > [data-cy=dropdown-input]")
            .children()
            .should("have.length", 112)
    })

    it("Check farm details are initially hidden", () => {
        cy.get("[data-cy=report-header]")
            .should("not.exist")
            
        cy.get("[data-cy=farm-name]")
            .should("not.exist")
    })
})