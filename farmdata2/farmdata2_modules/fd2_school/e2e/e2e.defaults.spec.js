describe("Test the harvest report default values", () => {
  beforeEach(() => {
      cy.login("manager1", "farmdata2")
      cy.visit("/farm/fd2-school/e2e")
  })
    
  it("Check the page header", () => {
    cy.get("[data-cy=page-header]").should("have.text","Harvest Report")
  }) 

  it("check the start date input", ()=>{
    cy.get("[data-cy=start-date]").should("have.value","2020-05-05")
  })

  it("check the end date input", ()=>{
    cy.get("[data-cy=end-date]").should("have.value", "2020-05-15")
  })

  it("check crop dropdown", ()=>{
    cy.get("[data-cy=crop-names]").children().eq(0).should("have.value", "ARUGULA")
    cy.get("[data-cy=crop-names]").children().eq(4).should("have.value", "BEAN-FAVA")
    cy.get("[data-cy=crop-names]").children().eq(110).should("have.value", "ZUCCHINI")
    cy.get("[data-cy=crop-names]").children().should("have.length", "111")

  })

})