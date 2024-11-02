describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })
      

    it("Sample testing the crop dropdown with all selection",()=>{

        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]")
            .should("contain.text","All")
        
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option1]")
            .should("contain.text","ARUGULA")

        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option5]")
            .should("contain.text","BEAN-FAVA")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option111]")
            .should("contain.text","ZUCCHINI")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]").children().should("have.length",112); 
            
    })
    
})
