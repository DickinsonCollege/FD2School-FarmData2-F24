describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
        
        

    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
            .should("have.text","Harvest Report")
    
    })
    it("Verify default values for date inputs", () => {
        cy.get("[data-cy=start-date]")
        .should("have.value", "2020-05-05")
    cy.get("[data-cy=end-date]")
        .should("have.value", "2020-05-15")
        // Empty test, ready to be filled in later with assertions for default values
    });
    it('should find the crop dropdown element', () => {
        cy.visit('/farm/fd2-school/e2e');
        cy.get('[data-cy="crop-dropdown"]').should('exist'); // Check that the dropdown exists
      });
    
      it('should contain crop options within the dropdown', () => {
        cy.get('[data-cy="crop-dropdown')
        .children('option')
        .should('have.length',111);

        cy.get('[data-cy="crop-dropdown"]').children().eq(0)
            .should('have.text', 'ARUGULA'); // First crop
        cy.get('[data-cy="crop-dropdown"]').children().eq(4)
            .should('have.text', 'BEAN-FAVA'); // Fifth crop
        cy.get('[data-cy="crop-dropdown"]').children().last()
            .should('have.text', 'ZUCCHINI');
      });

});
