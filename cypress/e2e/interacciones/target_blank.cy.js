describe('Interacciones con el navegador', () => {
    
    it('probando el target_blank y popover', () => {
        cy.visit('https://galiclerc.github.io/test-pages/index.html');
        cy.get('#popover').should('have.attr', 'target', '_blank');
        cy.get('#popover').should('have.attr', 'href', './pages/popover.html');
        cy.get('#popover').invoke('attr', 'target', '_self');
        cy.get('#popover').click()
        cy.wait(2000)
        cy.get('#mi-boton').click()
        cy.get('#mi-popover > p').should('have.text', 'Contenido del Popover')
        cy.wait(2000)
        cy.get('#close-popover').click()

    })
})