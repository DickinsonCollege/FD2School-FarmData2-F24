describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
    it("Testing Table Data",()=>{
        cy.get('[data-cy=r0-ID]')
            .should('exist')
    })
})