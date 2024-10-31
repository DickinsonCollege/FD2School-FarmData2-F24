describe("Test the Generate Report functionality of the page", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Check that the generate report button functions", () => {
        cy.get("[data-cy=report-title]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-title]").should("be.visible")
    })

    it("Check the contents of a generated report", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-farm-name]")
            .should("contain.text", "Sample Farm")
        cy.get("[data-cy=report-user-name]")
            .should("contain.text", "manager1")
        cy.get("[data-cy=report-language]")
            .should("have.text", "en")
    })

}) 