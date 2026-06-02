describe('Eliminar un producto del carrito', () => {

    beforeEach(() => {
        
        // Login
        cy.login()
    })

    // Eliminar un producto del carrito
    it('Eliminar un producto del carrito', () => {
        // añadir productos
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

        cy.get('.shopping_cart_badge').should('have.text', '2')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')

        // ir al carrito
        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.url().should('include', '/cart.html')

        // confirmar que no exista
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('not.exist')
        cy.get('.shopping_cart_badge').should('have.text', '1') 

    });

    //
    //
});
