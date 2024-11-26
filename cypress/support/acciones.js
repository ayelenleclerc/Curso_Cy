Cypress.Commands.add('loginOk', (username, password) => {
    cy.get("[data-test='username']").type(username);
    cy.get("[data-test='password']").type(password);
    cy.get("[data-test='login-button']").click();
})

Cypress.Commands.add('loginOk2', () => {
    cy.get("[data-test='username']").type('standard_user');
    cy.get("[data-test='password']").type('secret_sauce');
    cy.get("[data-test='login-button']").click();
})
Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('[data-test="logout-sidebar-link"]').click();  
})