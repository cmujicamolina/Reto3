describe('Shopping feature', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('a > .hidden-sm-down').click();
        cy.get('.col-md-6 > .form-control').type("rodrigomm@gmail.com");
        cy.get('.input-group > .form-control').type("12345");
        cy.get('#submit-login').click();
        cy.wait(2000);
    });   

    it('TC-002: FE | Loguearse al Sistema', () => {
        cy.get('.account > .hidden-sm-down').should('exist');
        cy.get('#identity-link > .link-item').should('exist');
        cy.screenshot();
    });

    it('TC-003: FE | Seleccionar productos y cargar al carrito', () => {
        cy.get('.logo').click();
        cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
        cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click();
        cy.get(':nth-child(2) > label > .input-color').click();
        cy.get('.add > .btn').click();
        cy.get('.cart-content-btn > .btn-primary').click();
        cy.screenshot();
    });
    
    it('TC-004: FE | Generar la compra del producto', () => {
        cy.get('.logo').click();
        cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
        cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click();
        cy.get(':nth-child(2) > label > .input-color').click();
        cy.get('.add > .btn').click();
        cy.get('.cart-content-btn > .btn-primary').click();
        cy.get('.text-sm-center > .btn').click();
        cy.get(':nth-child(6) > .col-md-6 > .form-control').type("Jr. torbellino 234");
        cy.get(':nth-child(8) > .col-md-6 > .form-control').type("Lima");
        cy.get(':nth-child(9) > .col-md-6 > .form-control').select("Arizona");
        cy.get(':nth-child(10) > .col-md-6 > .form-control').type("12345");
        cy.get('.form-footer > .continue').click();
        cy.wait(1000);
        cy.get('#js-delivery > .continue').click();
        cy.wait(1000);
        cy.get('#payment-option-1').click();
        cy.get('.js-terms').click();
        cy.get('.ps-shown-by-js > .btn').click();
        cy.wait(3000);
        cy.get('.h1').should("be.visible").should('exist');
        cy.get('.col-sm-4 > span').should("be.visible").should('exist');
        cy.screenshot();
    });

    it('TC-005: FE | Salir del sistema', () => {
        cy.get('.account > .hidden-sm-down').should('exist');
        cy.get('#identity-link > .link-item').should('exist');
        cy.get('.logout').should("be.visible").click();
        cy.get('h1').should("be.visible").should("exist");
        cy.screenshot();
    });
});