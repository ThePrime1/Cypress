describe("HTTP Requests", () => {
    it("GET Call", () => {
        cy.request('https://jsonplaceholder.typicode.com/todos/1')
            .its("status")
            .should("equal", 200);
    })

    it("POST Call", () => {
        cy.request({
            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts/",
            body: {
                title: "Some post",
                body: "This is a test post request",
                userId: 1
            }

        })
            .its("status")
            .should("equal", 201);
    })

    it("PUT Call", () => {
        cy.request({
            method: 'PUT',
            url: "https://jsonplaceholder.typicode.com/posts/1",
            body: {
                title: "Test post -updated",
                body: "This is a test put request",
                userId: 1,
                id: 1
            }

        })
            .its("status")
            .should("equal", 200);
    })

    it("DELETE Call", () => {
        cy.request({
            method: 'DELETE',
            url: "https://jsonplaceholder.typicode.com/posts/1"
        })
            .its("status")
            .should("equal", 200);
    })
})