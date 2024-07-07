describe("Different ways to post calls", () => {
    it("Approach 1- Hard coded json data", () => {

        const requestBody = {
            email: "john7968@gmail.com",
            first_name: "John",
            last_name: "Doe"
        }

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody
        })
            .then((response) => {
                expect(response.body.first_name).to.eq("John");
                expect(response.body.last_name).to.eq("Doe");
                expect(response.body.email).to.eq("john7968@gmail.com");
            })
    })

    it("Approach 2- Dynamically generating json objects", () => {

        const requestBody = {
            email: Math.random().toString(6).substring(3) + "@gmail.com",
            first_name: Math.random().toString(5).substring(2),
            last_name: Math.random().toString(5).substring(2)
        }

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody
        })
            .then((response) => {
                expect(response.body.first_name).to.eq(requestBody.first_name);
                expect(response.body.last_name).to.eq(requestBody.last_name);
                expect(response.body.email).to.eq(requestBody.email);
            })
    })

    it.only("Approach 3- External data file", () => {

        cy.fixture("users").then((data) => {
            const requestBody = data;

            cy.request({
                method: "POST",
                url: "https://reqres.in/api/users",
                body: requestBody
            })
                .then((response) => {
                    expect(response.body.first_name).to.eq(requestBody.first_name);
                    expect(response.body.last_name).to.eq(requestBody.last_name);
                    expect(response.body.email).to.eq(requestBody.email);

                    expect(response.body).has.property("email", requestBody.email)
                    expect(response.body).to.have.property("first_name", requestBody.first_name);
                });
        })


    })


})