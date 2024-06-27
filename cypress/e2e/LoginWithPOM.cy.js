import Login from "../PageObjects/LoginPage";

describe("Pom example", () => {
    it("Page object model pattern", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture("orangehrm").then((data) => {

            const ln = new Login();

            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        });


    })
})