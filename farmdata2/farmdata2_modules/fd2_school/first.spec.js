describe("Test the harvest report default values", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-school/e2e")
  })

  it("Check the page header", () => {
    cy.get('[data-cy=page-header]')
      .should('have.text', 'Harvest Report')
  })

  it("Check the default dates", () => {
    cy.get('[data-cy=start-date]')
      .should('have.value', '2020-05-05')
    
    cy.get('[data-cy=end-date]')
      .should('have.value', '2020-05-15')
  })

  it("Check the crop dropdown", () => {
    cy.get('[data-cy=crop-dropdown]')
    .children()
    .then($options => {

      expect($options).to.have.length(6)

      expect($options.eq(0)).to.have.text('All')
      expect($options.eq(4)).to.have.text('Peas')
      expect($options.last()).to.have.text('Turnip')
    })
  })
})