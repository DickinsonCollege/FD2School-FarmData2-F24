describe("Test the generate report button", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2")
    cy.visit("/farm/fd2-school/e2e")
  })
  it("Check the generate report button", () => {
    cy.get("[data-cy=title-text]")
      .should("not.exist")
    cy.get("[data-cy=generate-report-btn]").click()
    cy.get("[data-cy=title-text]")
      .should("be.visible")
  })
  it("Check the farm name, user name, and language", () => {      
    cy.get("[data-cy=generate-report-btn]").click()
    cy.get("[data-cy=farm-name]")
      .should("have.text","Farm:Sample Farm")
    cy.get("[data-cy=user-name]")
      .should("contain.text","manager")
    cy.get("[data-cy=language]")
      .should("have.text","English")
  })
})