describe('FD2 Harvest Report Table', () => {

    beforeEach(() => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-school/fd2");
    });

    it('should display the correct table headers and column count', () => {
      cy.get("[data-cy=generate-report-button]").click();
  
      cy.get("[data-cy=harvest-report-table]").should("be.visible");
  
      const expectedHeaders = ["ID", "Date", "Area", "Crop", "Yield", "Units"];
  
      cy.get("[data-cy=header-row]").children("th").should("have.length", expectedHeaders.length);
  
      expectedHeaders.forEach((headerText, index) => {
        cy.get(`[data-cy=h${index}]`).should("have.text", headerText);
      });
    });

    it('should filter rows by selected crop', () => {
      // Step 1: Generate the report using the default date range
      cy.get("[data-cy=generate-report-button]").click();

      // Step 2: Select a crop from the dropdown
      const selectedCrop = "Wheat"; // Replace with a crop that exists in the report data

      // Open the dropdown and select the crop
      cy.get("[data-cy=crop-dropdown] > select").select(selectedCrop);

      // Step 3: Verify the filtered table has the correct number of rows
      cy.get("[data-cy=harvest-report-table-body]").within(() => {
        cy.get("tr").then((rows) => {
          const rowCount = rows.length;

          // Step 4: Check each row to ensure it only contains the selected crop
          for (let i = 0; i < rowCount; i++) {
            cy.get(`[data-cy=row${i}-col3]`).should("have.text", selectedCrop);
          }
        });
      });
    });
});