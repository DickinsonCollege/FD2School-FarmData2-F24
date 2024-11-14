describe("Test the seeding input page", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2");
    cy.visit("/farm/fd2-field-kit/seedingInput");
  });

  it('Check Data section has the header "Data"', () => {
    cy.get("fieldset.panel-default")
      .first() // Target the first fieldset, which is the Data section
      .find("legend")
      .should("have.text", "Data");
  });

  it("Check Data section the date input element is enabled", () => {
    cy.get("[data-cy=date-select]").should("exist").and("not.be.disabled");
  });

  it("Check Data section the date input element has the default value of the current date", () => {
    cy.get("[data-cy=date-select").should("have.value", "2024-11-14");
  });

  it("Check Data section the crop drop down is enabled", () => {
    cy.get("[data-cy=dropdown-input").should("be.enabled");
  });

  it("Check Data section the crop drop down does not have a selected value", () => {
    cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input]").should(
      "have.text",
      ""
    );
  });

  it("Check Data section the crop drop down contains the correct crop list", () => {
    cy.get(
      "[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option0]"
    ).should("have.text", "ARUGULA");
    cy.get(
      "[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option4]"
    ).should("have.text", "BEAN-FAVA");
    cy.get(
      "[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option110]"
    ).should("have.text", "ZUCCHINI");
    cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input]")
      .children()
      .should("have.length", "111");
  });
});
