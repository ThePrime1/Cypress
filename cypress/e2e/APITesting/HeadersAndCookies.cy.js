describe("Sending headers ", () => {

    let authToken;

    before("Generating access token", () => {
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients/",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                clientName: "Mehedi",
                clientEmail: Math.random().toString(5).substring() + "@gmail.com"
            }
        }).then((response) => {
            authToken = response.body.accessToken;
        })
    })

    before("Creating orders", () => {
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: {
                "bookId": 1,
                "customerName": "Mehedi"
            }
        }).then((response) => {
            expect(response.body.created).equal(true);
            expect(response.status).equal(201);
        })
    })

    it("Fetching orders", () => {
        cy.request({
            method: "GET",
            url: "https://simple-books-api.glitch.me/orders",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            cookies: {
                'cookieName': 'mycookie'
            }
        }).then((response) => {
            expect(response.status).equal(200);
        })
    })

})