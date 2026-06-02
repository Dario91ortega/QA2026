describe('Avanzar checkout sin completar datos', () => {

    beforeEach(() => {
        
        // Login
        cy.login()
    })

    
    it('Avanzar checkout sin completar datos', () => {
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
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('contain', 'First Name is required')
        cy.url().should('include', '/checkout-step-one.html')


    });

    //
    //
});
