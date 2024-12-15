describe('Test the UI tabs are accurate for each kind of person logged into FarmData2', () => {
 

    it('When the manager is logged in the UI should contain FieldKit, BarnKit and FD2 Config tabs', () => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm')
        cy.get('a.glyphicons-processed[href="/farm/fd2-field-kit"]').should('exist').and('be.visible');
        cy.get('a.glyphicons-processed[href="/farm/fd2-barn-kit"]').should('exist').and('be.visible');
        cy.get('a.glyphicons-processed[href="/farm/fd2-config"]').should('exist').and('be.visible');
    })

    it('When worker is logged in UI should contain FieldKit and BarnKit tabs but not FD2Config tab', () => {
        cy.login('worker1', 'farmdata2')
        cy.visit('/farm')
        cy.get('a.glyphicons-processed[href="/farm/fd2-field-kit"]').should('exist').and('be.visible');
        cy.get('a.glyphicons-processed[href="/farm/fd2-barn-kit"]').should('exist').and('be.visible');
        cy.get('a.glyphicons-processed[href="/farm/fd2-config"]').should('not.exist')
    })

    it('When guest is selected none of the three tabs should appear', () => {
        cy.login('guest', 'farmdata2')
        cy.visit('/farm')
        cy.get('a.glyphicons-processed[href="/farm/fd2-field-kit"]').should('not.exist')
        cy.get('a.glyphicons-processed[href="/farm/fd2-barn-kit"]').should('not.exist')
        cy.get('a.glyphicons-processed[href="/farm/fd2-config"]').should('not.exist')
    })
})