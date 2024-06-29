describe("Window Handle", () => {
    it.skip("Child tab handle", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click();

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(5000);
        cy.go("back");
    })

    it("Child tab handle - Approach 2", () => {
        cy.visit("https://the-internet.herokuapp.com/windows");

        cy.get("a[href='/windows/new']").then((e) => {
            // Getting the href attribute
            let url = e.prop("href");
            // This opens the url in the same window
            cy.visit(url);
        })

        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new");
        cy.wait(5000);
        cy.go("back");
    })
})