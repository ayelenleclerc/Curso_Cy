/// <reference types= "cypress" />
import "cypress-real-events";

describe('The internet herokuapp',()=>{
    it('hovers', ()=>{
        cy.visit('https://the-internet.herokuapp.com/hovers')

        cy.get(':nth-child(3) > img').realHover();
        cy.get(':nth-child(3) > .figcaption > h5').realClick();
        
    })
})