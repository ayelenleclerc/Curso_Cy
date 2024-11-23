/// <reference types= "cypress" />

describe('SauceDemo.com',()=>{
    beforeEach('Ingresar a la página', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('sauceCredenciales').then((datos)=>{
            this.dato = datos
        })
    })
   
    it.only('Login  password error', function(){
      
        cy.escribir('[data-test="username"]', this.dato.standardUser)
        cy.escribir('[data-test="password"]',this.dato.errorPassword)
        cy.hacer_click('[data-test="login-button"]')
        cy.asertion_text('[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service')
})
  
})
