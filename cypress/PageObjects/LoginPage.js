class Login {

    usernameEl = "input[placeholder='Username']";
    passwordEl = "input[placeholder='Password']";
    btnEl = "button[type='submit']";
    verifyEl = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUserName(username) {
        cy.get(this.usernameEl).type(username);
    }

    setPassword(password) {
        cy.get(this.passwordEl).type(password);
    }

    clickSubmit() {
        cy.get(this.btnEl).click();
    }

    verifyLogin() {
        cy.get(this.verifyEl).should("have.value", "Dashboard");
    }

}

export default Login;