/**
 * This spec tests the BarnKit Sub-Tabs
 */

describe("Test the BarnKit Sub-Tabs", () => {

    beforeEach(() => {
        cy.login("manager1", "farmdata2");
        cy.visit("/farm/fd2-barn-kit/cypress");
    });

    it("Checks that the BarnKit tab contains exactly 3 visible sub-tabs", () => {
        // Wait for the secondary tabs element to exist
        cy.get("ul.tabs--secondary.pagination", { timeout: 10000 })
            .should("exist")
            .within(() => {
                // Get all sub-tab links within the secondary tabs list
                cy.get("li > a")
                    .should("be.visible")
                    .should("have.length", 3);
            });
    });

    it("Verifies that BarnKit sub-tabs are in correct order: 'Info', 'Seeding Report', and 'Transplanting Report'", () => {
        // Wait for the secondary tabs element to exist
        cy.get("ul.tabs--secondary.pagination", { timeout: 10000 })
            .should("exist")
            .within(() => {
                // Get all sub-tab links within the secondary tabs list
                cy.get("li > a")
                    .should("be.visible")
                    .then((tabs) => {
                        // Expected tab labels in order
                        const expectedTabs = ["Info", "Seeding Report", "Transplanting Report"];
                        // Verify text and order of each tab
                        tabs.each((index, tab) => {
                            expect(tab).to.contain.text(expectedTabs[index]);
                        });
                    });
            });
    });

    it("Checks that the BarnKit sub-tabs are in the exact order: 'Info', 'Seeding Report', 'Transplanting Report'", () => {
        // Get the tabs element directly and validate their order
        cy.get("ul.tabs--secondary.pagination > li > a")
            .then((tabs) => {
                expect(tabs[0]).to.contain.text("Info");
                expect(tabs[1]).to.contain.text("Seeding Report");
                expect(tabs[2]).to.contain.text("Transplanting Report");
            });
    });
});
