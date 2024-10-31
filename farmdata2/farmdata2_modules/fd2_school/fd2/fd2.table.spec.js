describe("Harvest Report Table Tests", () => {
  beforeEach(() => {
    cy.visit("/farm/fd2-school/fd2"); // Update with the actual path for your FD2 sub-tab
  });

  it("should load the Harvest Report page", () => {
    // Empty test to confirm Cypress setup
  });

  it("should display the correct table headers", () => {
    // Click the Generate Report button
    cy.get("[data-cy=generate-report-button").click();

    // Check each header
    cy.get("[data-cy=h0").should("have.text", "Row");
    cy.get("[data-cy=h1").should("have.text", "Date");
    cy.get(["data-cy=h2"]).should("have.text", "Area");
    cy.get(["data-cy=h3"]).should("have.text", "Crop");
    cy.get("data-cy=h4").should("have.text", "Yield");
    cy.get("data-cy=h5").should("have.text", "Edit");
    cy.get("[data-cy=h7").should("have.text", "Delete");
  });

  it("should have the correct number of columns", () => {
    // Click the Generate Report button to make teh table appear
    cy.get("[data-cy=generate-report-button]").click();

    // Verify the number of columns in the header row
    cy.get("[data-cy=table-headers]").children().should("have.length", 8);
  });
});
