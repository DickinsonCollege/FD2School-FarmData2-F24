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
});