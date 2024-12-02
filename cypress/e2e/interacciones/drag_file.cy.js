
describe('Interacciones con el navegador', () => {

    it('probando el Drag file', () => {
        cy.visit('https://galiclerc.github.io/test-pages/pages/drag-file.html')

        const dataTransfer = new DataTransfer();
        //Si el archivo NO esta en alguna carpeta del proyecto SI o SI va la ruta Absoluta
        cy.get('#dropArea').selectFile('C:/Users/ayele/Desktop/Testing.jpg', {action:'drag-drop'})


        //Si el archivo SI esta en alguna carpeta del proyecto va la ruta Relativa
        cy.get('#dropArea').selectFile('./cypress/fixtures/example.json', {action:'drag-drop'})
    })
})
