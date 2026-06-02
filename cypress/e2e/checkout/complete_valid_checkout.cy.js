describe('Completar checkout valido', () => {

    beforeEach(() => {
        
        // Login
        cy.login()
    })


    it('Completar checkout valido', () => {
        // añadir productos
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible')

        // ir al carrito
        cy.get('[data-test="shopping-cart-badge"]').click()
        cy.url().should('include', '/cart.html')

        // ir al checkout
        cy.get('[data-test="checkout"]').click()
        cy.url().should('include', '/checkout-step-one.html')

        // completar form del checkout
        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Pérez')
        cy.get('[data-test="postalCode"]').type('5000')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include', '/checkout-step-two.html')

        // Confirmar pedido
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')


    });

    //
    //
});
