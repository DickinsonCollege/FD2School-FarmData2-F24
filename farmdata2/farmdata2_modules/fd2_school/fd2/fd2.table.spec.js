describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
        cy.get('[data-cy=generate-report-button]').click();
    })
    it("Check the table header", () => {
        cy.get("[data-cy=h0]").should("have.text","Date")
        cy.get("[data-cy=h1]").should("have.text","Area")
        cy.get("[data-cy=h2]").should("have.text","Crop")
        cy.get("[data-cy=h3]").should("have.text","Yield")
        cy.get("[data-cy=h4]").should("have.text","Units")
        cy.get('[data-cy=table-headers]').children('th').should('have.length', 5);
    })

    it("Check the filtering of a crop", () => {
        cy.get('[data-cy=crop-dropdown] > .dropdown-input').click("ARUGULA");
        cy.wait(1000)
        cy.contains('[data-cy=crop-option]', "ARUGULA" ).click(); 
        cy.get('[data-cy=table-headers]').children('th').should('have.length', 5);
        cy.get(`[data-cy=td-ri$2]`).should('have.text', 'ARUGULA');

    })
    

})