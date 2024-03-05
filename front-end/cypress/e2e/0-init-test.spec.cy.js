/* eslint-disable no-undef */
// First group of tests for initial render of App
describe('Initial render test suite', () => {
    it('Check for navbrand header/link presence and functionality', () => {
        cy.visit('/');
        cy.get('#navCont > a').click();
        cy.get('#navCont > a').should('contain', 'PokeAPI Fetcher');
    })

    it('Checks for navbar submit button functionality', () => {
        cy.visit('/'); // Can use slash because we set baseUrl as dev server port
        cy.get('#submitButton').click();
    });

    it('Checks if the card container is empty', () => {
        cy.visit('/');
        cy.get('#cardHolder').children().should('have.length', 0);
    });
});

// Pokemon name searching tests
describe('Pokemon name submissions', () => {
    it('Input correct pokemon name, submit data, and find card', () => {
        cy.visit('/')
        cy.get('#inputQuery').type('charizard');
        cy.get('#submitButton').click();
        cy.get('#cardHolder').children().should('have.length', 1);
    })

    it('Input capitalized pokemon name, submit data, and find card', () => {
        cy.visit('/')
        cy.get('#inputQuery').type('CHARIZARD');
        cy.get('#submitButton').click();
        cy.get('#cardHolder').children().should('have.length', 1);
    })

    it('Input invalid pokemon name, submit data, and check for no cards', () => {
        cy.visit('/');
        cy.get('#inputQuery').type('bigyoshi');
        cy.get('#submitButton').click();
        cy.get('#cardHolder').children().should('have.length', 0);
    })
});