/// <reference types="Cypress">

describe("Check UI Elements", () => {
    it("Checking radio buttons", () => {

        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("input#male").should("be.visible");
        cy.get("input#female").should("be.visible");

        cy.get("input#female").check().should("be.checked");
        cy.get("input#male").should("not.be.checked");
    })

    it("Checking for number of checkbox and visibility", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(9)").find("input").should("have.length", 7);

        cy.get("input#sunday").should("be.visible");

        // Selecting single checkbox
        // cy.get("input#sunday").check().should("be.visible");
        // Unselecting checkbox
        // cy.get("input#sunday").uncheck().should("not.be.checked ");

        // Selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked");
        // Unselecting checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked");
    })
})