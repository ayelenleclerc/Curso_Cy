/// <reference types= "cypress" />


describe('SauceDemo', () => {
    let usersOk;
    let userLocked;
    let usersError;
    let elementos;
    let msgError;

    before('Traer datos', () => {
        cy.fixture('users_ok').then((data) => {
            usersOk = data;
        })
        cy.fixture('users_error').then((data) => {
            usersError = data;
        })
        cy.fixture('user_locked').then((data) => {
            userLocked = data;
        })
        cy.fixture('./DOM/loginElements').then((elemento) => {
            elementos = elemento;
        })
        cy.fixture('./DOM/messageError').then((msg) => {
            msgError = msg;
        })
    })

    beforeEach('Inicie la página', () => {
        cy.visit('https://www.saucedemo.com/')

    })

    it(" Login Locked User", () => {
        cy.escribir(elementos.login.username, userLocked.username)
        cy.escribir(elementos.login.password, userLocked.password)
        cy.hacer_clik(elementos.btnLogin)
        cy.asertion_text(elementos.errorMsg, msgError.lockedUser)
    })

    it('Login user error', () => {
        usersError.forEach((dato) => {
            cy.escribir(elementos.login.username, dato.username)
            cy.escribir(elementos.login.password, dato.password)
            cy.hacer_clik(elementos.btnLogin)
            cy.asertion_text(elementos.errorMsg, msgError.invalid)
        })
    })

    it('Login user correcto', () => {
        usersOk.forEach(dato => {
            cy.escribir(elementos.login.username, dato.username)
            cy.escribir(elementos.login.password, dato.password)
            cy.hacer_clik(elementos.btnLogin)
            cy.hacer_clik(elementos.menu.menu)
            cy.hacer_clik(elementos.menu.logout)
        })

    })

})