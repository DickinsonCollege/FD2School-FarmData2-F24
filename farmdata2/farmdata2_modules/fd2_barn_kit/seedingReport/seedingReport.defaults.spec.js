describe("Test the Seeding Report default values", () => {

    beforeEach(() => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-barn-kit/seedingReport");
    });

    it("Check the page header", () => {
        cy.get("[data-cy=text-center]")
            .should("have.text", "Seeding Report");
    });

    it("Check the default date - end date", () => {
        const today = new Date().toISOString().split("T")[0];
        cy.get("[data-cy=date-range-selection]")
          .find("input[data-cy = 'end-date' ]")
          .should("have.value", today);
      });

    it("Verify Generate Report button label and state", () => {
        cy.get("[data-cy=generate-rpt-btn]")
            .should("be.visible")
            .and("have.text", "Generate Report")
            .and("not.be.disabled");
    });

    it("Verify the default start date", () => {
        const firstDayOfYear = new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];

        cy.get("[data-cy=date-range-selection] input[name='start-date']")
            .should("have.value", firstDayOfYear);
    });

    it("Check for Set Dates section", () => {
        cy.get("legend")
            .should("contain", "Set Dates");
    });

    it("Check that report components are not initially visible", () => {
        cy.get('[data-cy=filters-panel]')
            .should('not.exist');
        cy.get('[data-cy=report-table]')
            .should('not.exist');
        cy.get('[data-cy=direct-summary]')
            .should('not.exist');
        cy.get('[data-cy=tray-summary]')
            .should('not.exist');
    });
});
