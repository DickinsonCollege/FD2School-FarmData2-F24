describe("Test the harvest report default values", ()=>{
    beforeEach(()=> {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
    it("Check the page header", ()=> {
        cy.get("[data-cy=page-header]")
        .should("have.text","Harvest Report")
    })
    it("Check the start and end date", ()=>{
        cy.get("[data-cy= start-date]")
        .type('2020-05-05').should('have.value', '2020-05-05')
        cy.get("[data-cy= end-date]")
        .type('2020-05-15').should('have.value', '2020-05-15')
    })
    it("Check the crop dropdown", ()=>{
        cy.get("[data-cy= crop-dropdown]").children().then((options)=>{
            expect(options).to.have.length(3)
            cy.get("[data-cy=crop-dropdown]").children().eq(0).should('have.text', 'Broccoli')
            cy.get("[data-cy=crop-dropdown]").children().eq(1).should('have.text', 'Kale'); - 1
            cy.get("[data-cy=crop-dropdown]").children().eq(options.length - 1).should('have.text', 'Peas')
        })
    })
    it("Check the Generate Report button", ()=> {
        cy.get("[data-cy=generate-report-button]").click()
    })
    it("Check the my sample report DNE or exists", ()=>{
        cy.get('[data-cy="report-header"]').should('not.exist');
        cy.get('[data-cy="generate-report-button"]').click();
        cy.get('[data-cy="report-header"]').should('be.visible');
    })
    it("Check the correct username", ()=>{
        cy.get('[data-cy="generate-report-button"]').click();
        cy.get('[data-cy="user-name"]').should('contain.text', 'user');
    })
    it("Check the farm name", ()=>{
        cy.get('[data-cy="generate-report-button"]').click();
        cy.get('[data-cy="farm-name"]').should('contain.text', 'farm');
    })
    it("Check the language", ()=>{
        cy.get('[data-cy="generate-report-button"]').click();
        cy.get('[data-cy="report-language"]').should('have.text', '');
    })
})