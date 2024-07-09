describe('template spec', () => {
  it('should fail', () => {
    cy.visit('https://example.cypress.io');
    // cy.visit('https://example.cypress.io/commands/querying');
    cy.compareSnapshot('example-cypress-io', {errorThreshold: 0.1});
  })
})