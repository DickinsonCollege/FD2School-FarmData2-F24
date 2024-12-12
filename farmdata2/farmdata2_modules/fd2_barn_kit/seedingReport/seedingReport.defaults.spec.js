/** 
* This spec tests the seeding report default values
*/

describe("Test the Seeding Report default values", () => {

    beforeEach(() => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-barn-kit/seedingReport");
    });

    it("Check the page header", () => {
        // Verify that the page header displays "Seeding Report".
        cy.get("[data-cy=text-center]")
            .should("have.text", "Seeding Report");
    });

    it("Check the default end date", () => {
        // Verify that the default end date is the current date.
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2024-12-11')
                .should('have.value', '2024-12-11')
        })
    });

    it("Verify Generate Report button label and state", () => {
        // Verify that the "Generate Button" button is visible,  correctly labeled, and enabled.
        cy.get("[data-cy=generate-rpt-btn]")
            .should("be.visible")
            .and("have.text", "Generate Report")
            .and("not.be.disabled");
    });

    it("Verify the default start date", () => {
        // Verify that the default start date is the first day of the current year.
        cy.get('[data-cy=date-range-selection]').within(() => {
            cy.get('input').first()
                .clear()
                .type('2024-01-01')
                .should('have.value', '2024-01-01')
        })
    });

    it("Check for Set Dates section", () => {
        // Verify the presence of the "Set Dates" section 
        cy.get("legend")
            .should("contain", "Set Dates");
    });

    it("Check that report components are not initially visible", () => {
        // Verify that the report components are not initially visible.
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
