describe("Test the generateReport button", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("Check the button", () => {
        cy.get("[data-cy=report-header]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=report-header]").should("be.visible")
    })

    it("Check the farm data", () => {
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("contain.text", "Sample Farm")
        cy.get("[data-cy=farm-user]").should("contain.text", "manager1")
        cy.get("[data-cy=language]").should("have.text", "")
    })
})