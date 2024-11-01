describe("Harvest Report Table Tests", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2");
    cy.visit("/farm/fd2-school/fd2"); // Update with the actual path for your FD2 sub-tab
  });

  it("should load the Harvest Report page", () => {
    // Empty test to confirm Cypress setup
  });

  it("should display the correct table headers", () => {
    // Click the Generate Report button
    cy.get("[data-cy=generate-report-button]").click();

    // Check each header
    cy.get("[data-cy=h0]").should("have.text", "Row");
    cy.get("[data-cy=h1]").should("have.text", "Date");
    cy.get("[data-cy=h2]").should("have.text", "Area");
    cy.get("[data-cy=h3]").should("have.text", "Crop");
    cy.get("[data-cy=h4]").should("have.text", "Yield");
    cy.get("[data-cy=h5]").should("have.text", "Units");
    cy.get("[data-cy=h6]").should("have.text", "Edit");
    cy.get("[data-cy=h7]").should("have.text", "Delete");
  });

  it("should have the correct number of columns", () => {
    // Click the Generate Report button to make the table appear
    cy.get("[data-cy=generate-report-button]").click();

    // Verify the number of columns in the header row
    cy.get("[data-cy=table-headers]").children().should("have.length", 8);
  });

  it("should filter table rows by selected crop", () => {
    // Generate the report with the default date range
    cy.get("[data-cy=generate-report-button]").click();

    // Select "ASPARAGUS" from the dropdown
    const cropToSelect = "ASPARAGUS";
    cy.get("[data-cy=crop-dropdown] > select").select(cropToSelect);

    // Verify there are exactly 4 rows for ASPARAGUS
    cy.get("[data-cy=harvest-table] tbody tr").should("have.length", 4);

    // Verify each row has "ASPARAGUS" in the crop column
    cy.get("[data-cy=harvest-table] tbody tr").each((row) => {
      // Trim whitespace to handle extra spaces
      cy.wrap(row)
        .find("td")
        .eq(3)
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.equal(cropToSelect);
        });
    });
  });
});
