describe("Test the harvest report user interactions", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the Generate Report Button Functionality", () => {
        cy.get("[data-cy=report-header]")
            .should("not.exist")

        cy.get("[data-cy=generate-report-button]").click()

        cy.get("[data-cy=report-header]")
            .should("be.visible")
    })
    it("Display Farm info, username, and language",()=>{
        cy.get("[data-cy=generate-report-button]").click();

        cy.get("[data-cy=farm-name]")
            .should("have.text","Farm: Sample Farm");

        cy.get("[data-cy=user-name]")
            .should("contain.text","manager1");

        cy.get("[data-cy=language]")
            .should('have.text',"en");

    })
})