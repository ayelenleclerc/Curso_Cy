describe('Interacciones con el navegador', () => {
    
    it('probando el Alert', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/alert.html')
        cy.on('window:alert', (texto) => {
            expect(texto).to.be.equal('Esto es un Alert')
        })
        cy.get('#btn').click()
    })
})