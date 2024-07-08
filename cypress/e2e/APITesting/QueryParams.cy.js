describe("Api testing", () => {
    it("Passing query params", () => {

        const queryParams = { page: 2 };

        cy.request({
            method: "GET",
            url: "http://reqres.in/api/users",
            qs: queryParams
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.status).equal(200);
            expect(response.body.page).to.eq(2);
            expect(response.body.data).has.length(6);

            expect(response.body.data[0]).have.property('id', 7);
            expect(response.body.data[0]).have.property('first_name', 'Michael');
        })
    })
})