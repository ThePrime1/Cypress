describe("Handle Dropdown", () => {
    it.skip("dropdown with select", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#country").select("canada")
            .should("have.value", "canada");
    })

    it.skip("dropdown without select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("span[aria-label='Country'] b[role='presentation']").click();
        cy.get("input.select2-search__field").type("Japan").type('{enter}');

        cy.get("#select2-billing_country-container").should("have.text", "Japan");
    })

    it.skip("auto suggest dropdown", () => {
        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Delhi");
        cy.get(".suggestion-title").contains("Delhi University").click();
    })

    it("dynamic dropdown", () => {
        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type("cypress automation");

        cy.wait(3000)

        //cy.get("div.wM6W7d>span").should("have.length", 11);

        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if ($el.text() === "cypress automation jobs") {
                cy.wrap($el).click();
            }
        });

        cy.get("#APjFqb").should("have.value", "cypress automation jobs");


    })
})