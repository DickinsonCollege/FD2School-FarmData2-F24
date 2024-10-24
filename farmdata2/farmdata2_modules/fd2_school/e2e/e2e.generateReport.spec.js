describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the visibility of table header", () => {
        cy.get("[data-cy=table-header]").should("not.exist")
        cy.get("[data-cy=generate-report]").click()
        cy.get("[data-cy=table-header]").should("be.visible")
    }) 
  
    it("Check the table detail", () => {
        cy.get("[data-cy=generate-report]").click()
        cy.get("[data-cy=farm-detail]").should("have.text", "Sample Farm")
        cy.get("[data-cy=user-detail]").should("have.text", "manager1")
        cy.get("[data-cy=language-detail]").should("have.text", "English")
        cy.get("[data-cy=start-date-detail]").should("have.text", "2020-05-05")
        cy.get("[data-cy=end-date-detail]").should("have.text", "2020-05-15")
        cy.get("[data-cy=crop-detail]").should("have.text", "ARUGULA")
    }) 
})