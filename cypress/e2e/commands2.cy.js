describe('SauceDemo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.loginOk2()
    })

    it('Login user correcto', () => {
   
        cy.asertion_text('.title', 'Products')
       
    });
    afterEach(() => {
        cy.logout()
    })
});
