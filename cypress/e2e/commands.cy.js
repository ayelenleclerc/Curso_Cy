/// <reference types= "cypress" />

describe('SauceDemo.com',()=>{
    beforeEach('Ingresar a la página', function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('sauceCredenciales').then((datos)=>{
            this.dato = datos
        })
        cy.fixture('../fixtures/DOM/loginElements.json').then((data) => {
            this.element = data;
        })
        cy.fixture('../fixtures/DOM/messageError.json').then((data) => {
            this.msg = data;
        })
    })
   
    it.only('Login  password error', function(){
      
        cy.escribir(this.element.login.username, this.dato.standardUser)
        cy.escribir(this.element.login.password,this.dato.errorPassword)
        cy.hacer_click(this.element.login.btnLogin)
        cy.asertion_text(this.element.login.errorMsg, this.msg.msg.invalid)
})
  
})
