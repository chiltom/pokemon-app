// First group of tests for initial render
describe('Initial render test suite', () => {
    it('Visits the app and checks for navbar', () => {
        cy.visit('/'); // Can use slash because we set baseUrl as dev server port
        cy.get('nav').should('contain', 'div')
    })
})