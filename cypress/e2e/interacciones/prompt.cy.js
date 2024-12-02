describe('Interacciones con el navegador', () => {

    it('probando el prompt', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/prompt.html')
        cy.window().then((win)=> {
            cy.stub(win, 'prompt').returns('');
            //En Cypress, cy.stub() es un comando que devuelve un valor(el stub, en este caso devolverá Pepe) de forma sincrónica, en lugar de devolver un objeto encadenable tipo Promise.
        })
        cy.get('#btn').click()
        cy.get('#aviso').should('have.text', 'Hola ! que bueno que estés aquí!')
        
    })
})