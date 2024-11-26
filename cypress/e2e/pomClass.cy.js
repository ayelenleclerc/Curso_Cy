import homePage from "../pages/homePage";
import inventoryPage from "../pages/inventoryPage";


describe('SauceDemo', () => {
    let usersOk;
    before(() => {
        cy.visit('/');

        cy.fixture('/users_ok.json').then((data) => usersOk = data);
    })

    it('Login ok', () => { 
        usersOk.forEach(user => {
            homePage.typeUsername(user.username)
            homePage.typePassword(user.password)
            homePage.clickLoginButton()
            inventoryPage.abrirMenu()
            inventoryPage.logout()
        })
    
    })
})