describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')


    cy.contains('type').click()

    cy.url().should('include','/commands/actions')
    //get an input, type into it
    cy.get('.action-email').type('fake@email.com')
    //verify that the value is updated
    cy.get('.action-email').should('have.value','fake@email.com')
  })
})