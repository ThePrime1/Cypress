describe("Handling alerts", () => {
    it.skip("Simple JavaScript Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.wait(3000)
        cy.get("button[onclick='jsAlert()']").click();

        /** To validate alerts, we have to
        fire an event using cy.on and specify
        what kind of alert window is that, like 
        below example **/

        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert");
        })
        cy.get("#result").should("have.text", "You successfully clicked an alert");
    })

    it.skip("JS Confirm Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm");
        })

        //Cypress will close the window clicking cancel button
        //bydefault cypress uses ok button to close windows
        cy.on("window:confirm", () => false);

        cy.get("#result").should("have.text", "You clicked: Ok")
    })

    it.skip("JS Prompt Alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("welcome");
        })
        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result").should("have.text", "You entered: welcome");
    })

    it("Authentication alert", () => {

        // Approach 1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth: { username: "admin", password: "admin" } });

        // cy.get("div[class='example'] p").should("have.contain", "Congratulations!");

        //Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.get("div[class='example'] p").should("have.contain", "Congratulations!");


    })
})