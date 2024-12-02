describe('Interacciones con el navegador', () => {

    it('probando el confirm', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/confirm.html')
        cy.on('window:confirm', (texto) => {
            expect(texto).to.equal('Esto es un Confirm')
            return false;
            //  return true;
        })

        cy.get('#btn').click()
        cy.get('#confirm').should('have.text', 'Hiciste click en cancelar')
        // cy.get('#confirm').should('have.text', 'Hiciste click en aceptar')
    })
})