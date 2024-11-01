describe("Check contents of harvest report table", () => {
  beforeEach(() => {
      cy.login("manager1", "farmdata2")
      cy.visit("/farm/fd2-school/fd2")
  })
    
  it("Contents of Harvest Report Table", () => {
    cy.get("[data-cy=page-header]").should("have.text","Harvest Report")
  })

})
