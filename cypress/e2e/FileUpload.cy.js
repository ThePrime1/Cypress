import "cypress-file-upload";

describe("File upload", () => {
    it.skip("Simple fle upload", () => {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get("#file-upload").attachFile("test1.pdf");
        cy.get("#file-submit").click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    })

    it.skip("File upload- Rename", () => {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get("#file-upload").attachFile({ filePath: "test1.pdf", fileName: "sqaTheory1.pdf" });
        cy.get("#file-submit").click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    })

    it.skip("File upload- drag and drop", () => {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.get("#drag-drop-upload").attachFile("test1.pdf", { subjectType: "drag-n-drop" });

        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains("test1.pdf");

        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    })

    it.skip("File upload- drag and drop", () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        cy.get("#filesToUpload").attachFile(["test1.pdf", "test2.pdf"])
    })

    it("File upload- shadow dom", () => {

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");

        cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile("test1.pdf")
        cy.wait(5000);

        cy.get(".smart-item-name", { includeShadowDom: true }).contains("test1.pdf");

    })
})