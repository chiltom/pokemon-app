/* eslint-disable no-undef */
// Pokemon name searching tests
describe('Pokemon name submissions', () => {
    it('Input correct pokemon name, submit data, and find card', () => {
        cy.visit('/')
        cy.get('#inputQuery').type('charizard');
        cy.get('#submitButton').click();
        cy.get('#cardHolder').children();
    })
});