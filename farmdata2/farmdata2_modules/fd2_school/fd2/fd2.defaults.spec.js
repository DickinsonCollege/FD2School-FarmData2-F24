describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text","Harvest Report")

    })

    it("Check the default start and end dates", () => {
        cy.get("[data-cy=start-date]")
            .should("have.value","2020-05-05")
        cy.get("[data-cy=end-date]")
            .should("have.value","2020-05-15")

    })

    it("Check the crop selector", () => {
        cy.get("[data-cy=crop-selector]").children().eq(0)
            .should("have.text","ALL")
        cy.get("[data-cy=crop-selector]").children().eq(4)
            .should("have.text","BEAN-DRY")
        cy.get("[data-cy=crop-selector]").children().eq(110)
            .should("have.text","ZUCCHINI")
        cy.get("[data-cy=crop-selector]").children()
            .should("have.length", 112)
    })
}) 