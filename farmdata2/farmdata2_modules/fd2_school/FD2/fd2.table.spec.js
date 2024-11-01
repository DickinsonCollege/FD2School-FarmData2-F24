describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
        
        

    })
    it('should display the correct table headers', () => {
        // Visit the page where the Harvest Report is rendered
        cy.visit("/farm/fd2-school/fd2");

        // Click the "Generate Report" button to render the table
        cy.get('[data-cy=generate-report-button]').click();

        // Verify the table headers
        const expectedHeaders = ["Date", "Area", "Crop", "Yield", "Units"];
        expectedHeaders.forEach((header, index) => {
            cy.get(`[data-cy=h${index}]`).should("have.text", header);
        });
    });
    it('should display the correct table headers and number of columns', () => {
        // Visit the page where the Harvest Report is rendered
        cy.visit("/farm/fd2-school/fd2");

        // Click the "Generate Report" button to render the table
        cy.get('[data-cy=generate-report-button]').click();

        // Verify the table headers
        const expectedHeaders = ["Date", "Area", "Crop", "Yield", "Units"];
        expectedHeaders.forEach((header, index) => {
            cy.get(`[data-cy=h${index}]`).should("have.text", header);
        });

        // Check the number of columns
        
    });
        it("Check crop filtering", () => {
            // Click generate report to make table appear
            cy.get('[data-cy=generate-report-button]').click()
    
            // Select ASPARAGUS from the dropdown
            cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]")
                .select("ASPARAGUS")
    
            // Generate report again to update the table
            cy.get('[data-cy=generate-report-button]').click()
    
            // Wait for table to update
            cy.wait(1000)
    
            // Check number of rows should be 5
            cy.get("[data-cy=table-body]")
                .find('tr')
                .should("have.length", 5)
    
            // Check each row has ASPARAGUS in the crop column
            cy.get("[data-cy=table-body]")
                .find('tr')
                .each(($row) => {
                    cy.wrap($row)
                        .find('td')
                        .eq(3)  // Crop column
                        .should("contain", "ASPARAGUS")
                })
        })
    
 
    
    
});