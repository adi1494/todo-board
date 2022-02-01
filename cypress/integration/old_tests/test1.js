describe('test 1', function () {
  it('does something', function () {
    cy.visit('http://localhost:3000/')
    cy.get('.text-field')
      .type('first todo')
      .should('have.value', 'first todo');
    cy.contains('Add')
      .click();
    cy.contains('check')
      .click();
    cy.contains('check')
      .click();
    cy.contains('delete')
      .click();
  })
})