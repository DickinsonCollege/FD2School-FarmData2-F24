describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
    it("Testing Table Data",()=>{
        cy.get('[data-cy=test-table]')
            .should('not.exist')
        cy.get('[data-cy=generate-report-button]')
            .click()
        cy.get('[data-cy=test-table]')
            .should('be.visible')
        cy.get("[data-cy=h0]").should("have.text","ID")
        cy.get("[data-cy=h1]").should("have.text","Row")
        cy.get("[data-cy=h2]").should("have.text","Date")
        cy.get("[data-cy=h3]").should("have.text","Crop")
        cy.get("[data-cy=h4]").should("have.text","Area")
        cy.get("[data-cy=h5]").should("have.text","Yield")
        cy.get("[data-cy=h6]").should("have.text","Units")
        cy.get('[data-cy=table-headers').children().should("have.length",9)
    })
    it("Checking the harvest report filtering by crop selection",()=>{
        cy.get('[data-cy=crop-dropdown]>[data-cy=dropdown-input]')
            .select('BOKCHOY')
        cy.get('[data-cy=picked-crop]').should("contain.text","BOKCHOY")
        cy.get('[data-cy=generate-report-button]').click()


        cy.get('[data-cy=td-r2c3]').should('contain.text','BOKCHOY')

        cy.get('[data-cy=table]>[data-cy=table-body] tr',{timeout:30000})
            .should('have.length',27)
        
    })
})