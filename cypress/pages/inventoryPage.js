class inventoryPage{
    elements = {
        menu:()=>cy.get("#react-burger-menu-btn"),
        logout: () => cy.get("[data-test='logout-sidebar-link']"),
        page_title: () => cy.get('[data-test="title"]'),
        icon_cart: () => cy.get('[data-test="shopping-cart-link"]'),
        icon_add: () => cy.get('[data-test="shopping-cart-badge"]'),
        product1: {
            img: () => cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]'),
            prod_title: () => cy.get('[data-test="inventory-item-name"]'),
            price: () => cy.get('[data-test="inventory-item-price"]'),
            btn_add: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
            btn_remove: () => cy.get('[data-test="remove-sauce-labs-backpack"]')
        },

    }
    abrirMenu() {
        this.elements.menu().click()
    }
    logout() {
        this.elements.logout().click()

    }
    ver_titulo() {
        this.elements.page_title().should('have.text', 'Products')
    }

    verificarImagen() {
        this.elements.product1.img().click()
    }

    verificarTitulo(texto) {
        this.elements.product1.prod_title().should('have.text', texto)
    }

    verificarPrecio(dato) {
        this.elements.product1.price().should('have.text', dato)
    }
}

export default new inventoryPage();