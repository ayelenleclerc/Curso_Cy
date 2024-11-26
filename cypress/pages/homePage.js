class homePage{
    elements = {
        usernameInput: () => cy.get("[data-test='username']"),
        passwordInput: ()=> cy.get("[data-test='password']"),
        loginButton: () => cy.get("[data-test='login-button']"),
        errorMsg: () => cy.get("[data-test='error']")
    }
    typeUsername(username) {
        this.elements.usernameInput().type(username);
    }
    typePassword(password) {
        this.elements.passwordInput().type(password);
    }
    clickLoginButton() {
        this.elements.loginButton().click();
    }
    assertionError(errorMsg) {
        this.elements.errorMsg().should('have.text', errorMsg);
    }
}

export default new homePage();