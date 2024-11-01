describe("Check contents of harvest report table", () => {
  beforeEach(() => {
      cy.login("manager1", "farmdata2")
      cy.visit("/farm/fd2-school/fd2")
  }),
    
  it("Check table headers", () => {
    cy.get('[data-cy = generate-report-button]').click()
    cy.get("[data-cy=table-headers]").children().should("have.length", 5)
  }),

  it("Check table for a specific crop", () => {
    cy.get('[data-cy=crop-drop-down] > [data-cy=dropdown-input]').select('ASPARAGUS');
    cy.get('[data-cy = generate-report-button]').click()
    cy.get('[data-cy=table-headers]').children().should('have.length', 5);
    for(let i = 0; i < 5; i++){
      cy.get('[data-cy=td-r' + i + "c2]").should('contains.text', 'ASPARAGUS');
    }
    
  })

})
