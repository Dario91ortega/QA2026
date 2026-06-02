describe('Añadir al carrito multiples', () => {

    beforeEach(() => {
        
        // Login
        cy.login()
    })

    // Agregar producto al carrito
    it('Añadir al carrito multiples', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '3')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible')
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible')
    });

    //
    //
});
