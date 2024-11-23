/// <reference types= "cypress" />

describe('SauceDemo.com',()=>{
    beforeEach('Ingresar a la página', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('sauceCredenciales').then((datos)=>{
            this.dato = datos
        })
    })
    it('Login user locked out', function(){
        cy.get('[data-test="username"]').type(this.dato.lockedUser)
        cy.get('[data-test="password"]').type(this.dato.passwordOk)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Login user error', function(){
            cy.get('[data-test="username"]').type(this.dato.errorUser)
            cy.get('[data-test="password"]').type(this.dato.passwordOk)
            cy.get('[data-test="login-button"]').click()
            cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
    it('Login  password error', function(){
      
        cy.get('[data-test="username"]').type(this.dato.standardUser)
        cy.get('[data-test="password"]').type(this.dato.errorPassword)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
})
    it('Login user correcto', function(){
            cy.get('[data-test="username"]').type(this.dato.standardUser)
            cy.get('[data-test="password"]').type(this.dato.passwordOk)
            cy.get('[data-test="login-button"]').click()
            cy.get('#react-burger-menu-btn').click()
            cy.get('[data-test="logout-sidebar-link"]').click()
    })
})
