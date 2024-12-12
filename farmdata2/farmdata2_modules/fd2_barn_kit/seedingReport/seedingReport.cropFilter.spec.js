//Test Crop Filter

describe('Test Crop Filter', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })
    it('Check if multiple different crops are in the table when “All” is selected in the Crop filter', () => {
        cy.get('[data-cy=start-date-select]')
            .type('2019-10-01')
        cy.get('[data-cy=end-date-select]')
            .type('2020-01-01')
        cy.get('[data-cy=generate-rpt-btn]').click()

        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
            .select('All')
            .should('have.value', 'All')
        
        cy.get('[data-cy=td-r0c1]')
            .invoke('text')
            .then(crop => {
                expect(crop, 'LETTUCE-MES MIX')
        })
        cy.get('[data-cy=td-r2c1]')
            .invoke('text')
            .then(crop => {
                expect(crop, 'SPINACH')
        })
        cy.get('[data-cy=td-r7c1]')
            .invoke('text')
            .then(crop => {
                expect(crop, 'TURNIP')
        })  
        cy.get('[data-cy=table-body]').children()
            .should('have.length', '8')
    })
    it('Check the table only have seeding logs for selected crop (Garlic)', () => {
        //Katey 
        //Set the date range for the report
        cy.get("[data-cy=date-range-selection]>[data-cy=start-date-select]>[data-cy=date-select]")
            .type('2012-01-01');
        cy.get("[data-cy=date-range-selection]>[data-cy=end-date-select]>[data-cy=date-select]")
            .type('2020-12-12');

        //generate report table
        cy.get("[data-cy=generate-rpt-btn]")
            .click();

        //check that report table exists
        cy.get("[data-cy=report-table]")
            .should("exist");
        cy.get("[data-cy=table]")
            .should("exist");

        //select the test crop 
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]")
            .select("GARLIC");

        //check that the text in the crop columns are equivalent to the target crop (checked two different cells)
        cy.get("[data-cy=table]>[data-cy=table-body]>[data-cy=r1]>[data-cy=td-r1c1]>[data-cy=r1-Crop]")
            .should("have.text", "GARLIC");
        cy.get("[data-cy=table]>[data-cy=table-body]>[data-cy=r3]>[data-cy=td-r3c1]>[data-cy=r3-Crop]")
            .should("have.text", "GARLIC");
    })
    it('Secondary check the table only have seeding logs for selected crop(Bell-peppers)', () => {
        //Katey
        //Set the date range for the report
        cy.get("[data-cy=date-range-selection]>[data-cy=start-date-select]>[data-cy=date-select]")
            .type('2011-01-01');
        cy.get("[data-cy=date-range-selection]>[data-cy=end-date-select]>[data-cy=date-select]")
            .type('2020-12-12');

        //generate report table
        cy.get("[data-cy=generate-rpt-btn]")
            .click();

        //check that report table exists
        cy.get("[data-cy=report-table]")
            .should("exist");
        cy.get("[data-cy=table]")
            .should("exist");

        //select the test crop 
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]")
            .select("PEPPERS-BELL");

        //check that the text in the crop columns are equivalent to the target crop (checked two different cells)
        cy.get("[data-cy=table]>[data-cy=table-body]>[data-cy=r1]>[data-cy=td-r1c1]>[data-cy=r1-Crop]")
            .should("have.text", "PEPPERS-BELL");
        cy.get("[data-cy=table]>[data-cy=table-body]>[data-cy=r3]>[data-cy=td-r3c1]>[data-cy=r3-Crop]")
            .should("have.text", "PEPPERS-BELL");


    })
    it("Check the dropdown for the Crop filter only has crops with seeding logs in the date range", () => {
        //anne
        cy.get("[data-cy=crop-dropdown]").should("exist");
    
        cy.get("[data-cy=start-date-select]").should("exist").type("2019-01-01");
    
        cy.get("[data-cy=end-date-select]").should("exist").type("2019-03-01");
    
        cy.get("[data-cy=date-select]").each(($el, index, $all) => {
          if (index == 0) {
            expect($el).to.have.value("2019-01-01");
          } else if (index == 1) {
            expect($el).to.have.value("2019-03-01");
          }
        });
      });
})
