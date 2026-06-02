describe('Añadir al carrito', () => {

    beforeEach(() => {
        
        // Login
        cy.login()
    })

    // Agregar producto al carrito
    it('Agregar producto al carrito', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
    });
});
