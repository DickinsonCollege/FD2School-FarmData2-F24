describe("Test the harvest report generation", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Verify report generation functionality", () => {
        // Check that report header doesn't exist before generating
        cy.get("[data-cy=report-header]")
            .should("not.exist")

        // Get and click the Generate Report button
        cy.get("[data-cy=generate-report-button]")
            .should("exist")
            .click()

         cy.get("[data-cy=report-header]").should("be.visible")
    })

    it("Check the farm data", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("contain.text", "Sample Farm")
        cy.get("[data-cy=farm-user]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "")
    })
})