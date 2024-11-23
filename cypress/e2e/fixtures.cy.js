/// <reference types= "cypress" />


describe('SauceDemo', ()=>{
 let usersOk;
 let userLocked;
 let usersError;

    before('Traer datos',()=>{
        cy.fixture('users_ok').then((data)=>{
            usersOk =data;
        })
        cy.fixture('users_error').then((data)=>{
            usersError =data;
        })
        cy.fixture('user_locked').then((data)=>{
            userLocked =data;
        })
    })

    beforeEach('Inicie la página', ()=>{
        cy.visit('https://www.saucedemo.com/')
        
    })

    it(" Login Locked User", ()=>{
        cy.get('[data-test="username"]').type(userLocked.username)
        cy.get('[data-test="password"]').type(userLocked.password)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it('Login user error', ()=>{
        usersError.forEach((dato)=>{
            cy.get('[data-test="username"]').type(dato.username)
            cy.get('[data-test="password"]').type(dato.password)
            cy.get('[data-test="login-button"]').click()
            cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
        })
    })

    it('Login user correcto', ()=>{
        usersOk.forEach(dato =>{
            cy.get('[data-test="username"]').type(dato.username)
            cy.get('[data-test="password"]').type(dato.password)
            cy.get('[data-test="login-button"]').click()
            cy.get('#react-burger-menu-btn').click()
            cy.get('[data-test="logout-sidebar-link"]').click()
        })
       
    })
   
})