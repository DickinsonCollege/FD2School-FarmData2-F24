describe("Test the harvest report table", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/fd2")
    })

    it("Check table headers", () => {
        // Click generate report button
        cy.get('[data-cy=generate-report-button]').click()
        
        // Check each header
        cy.get("[data-cy=h0]").should("have.text", "Date")
        cy.get("[data-cy=h1]").should("have.text", "Area")
        cy.get("[data-cy=h2]").should("have.text", "Crop")
        cy.get("[data-cy=h3]").should("have.text", "Yield")
        cy.get("[data-cy=h4]").should("have.text", "Units")
        
        // Check number of columns using the row containing headers
        cy.get("[data-cy=h0]")
            .parent()
            .children()
            .should("have.length", 6)
    })

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
})