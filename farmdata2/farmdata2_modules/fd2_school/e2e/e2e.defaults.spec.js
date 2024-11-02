describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text", "Harvest Report")
    })
    it("Checking the correct default start and end dates",()=>{
        cy.get("[data-cy=start-date]")
            .should("have.value","2020-05-05")
        cy.get("[data-cy=end-date]")
            .should("have.value","2020-05-15")
    })
    it("Sample testing the crop dropdown selection",()=>{
        cy.get("[data-cy=crop-select]").children().eq(0)
            .should("have.text","All")
        cy.get("[data-cy=crop-select]").children().eq(1)
            .should("have.text","ARUGULA")
        cy.get("[data-cy=crop-select]").children().eq(5)
            .should("have.text","BEAN-FAVA")
        cy.get("[data-cy=crop-select]").children().eq(111)
            .should("have.text","ZUCCHINI")
        cy.get("[data-cy=crop-select]").children()
            .should("have.length",112)
    })
})
