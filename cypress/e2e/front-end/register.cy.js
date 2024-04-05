describe('Register feature', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('TC-001: FE | Register a new user', () => {
        cy.get('a > .hidden-sm-down').click();
        cy.get('.no-account > a').click();
        cy.get(':nth-child(1) > .custom-radio > input').click();
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type("Rodrigo");
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type("Valentin");
        cy.get(':nth-child(4) > .col-md-6 > .form-control').type("rodrigomm@gmail.com");
        cy.get('.input-group > .form-control').type("12345");
        cy.get(':nth-child(6) > .col-md-6 > .form-control').type("04/18/1979");
        cy.get(':nth-child(9) > .col-md-6 > .custom-checkbox > label > input').click();
        cy.get('.form-footer > .btn').click();
        cy.wait(2000);
        cy.get('.account > .hidden-sm-down').should('exist');
        cy.screenshot();
    });    
});