describe("Assertions demo", () => {
    it('Implicit assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        //should, and 
        // cy.url().should('include', 'orangehrmlive.com');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain', 'orangehrm');

        // In short we can write like this
        cy.url().should('include', 'orangehrmlive.com')
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'orangehrm');

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM');

        cy.get("img[alt='company-branding']").should('be.visible')
            .should('exist');

        cy.get("input[placeholder='Username']").type("Admin")
            .should("have.value", "Admin");
    })

    it("Explicit assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();

        let expName = "xyz";
        cy.get(".oxd-userdropdown-name").then((x) => {
            //BDD style assertions
            let actName = x.text();
            expect(actName).to.equal(expName);

            //TDD style assertions
            assert.equal(actName, expName);
            assert.notEqual(actName, expName);
        })





    })
})