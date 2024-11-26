
describe('SauceDemo', () => {
    let usersOk;
    before(() => {
        cy.visit('/');
        cy.fixture('/users_ok.json').then((data) => usersOk = data);
    })

    it('Login ok', () => { 
        usersOk.forEach(user => {
         cy.loginOkPOM(user.username, user.password)
        })
    
    })
})