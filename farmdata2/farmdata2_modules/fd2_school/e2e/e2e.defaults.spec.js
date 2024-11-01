describe("Harvest Report Generation", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })

    it("should display the harvest report header when the 'Generate Report' button is clicked", () => {
        cy.get("[data-cy=report-header]").should("not.exist")  
        cy.get("[data-cy=generate-report-button]").click()      
        cy.get("[data-cy=report-header]").should("be.visible")  
    })

    it("should display the correct farm name when the report is generated", () => {
        cy.get("[data-cy=farm-name]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=farm-name]").should("be.visible").and("have.text", "Farm: Sample Farm")
    })

    it("should display the correct username when the report is generated", () => {
        cy.get("[data-cy=user-name]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=user-name]").should("be.visible").and("contain.text", "manager1")
    })

    it("should display the correct language when the report is generated", () => {
        cy.get("[data-cy=language]").should("not.exist")
        cy.get("[data-cy=generate-report-button]").click()
        cy.get("[data-cy=language]").should("be.visible").and("have.text", "English")
    })
})