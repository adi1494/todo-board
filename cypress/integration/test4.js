describe('test 4', function () {
  it('does something', function () {
    cy.visit('http://localhost:3000/')
    cy.contains('Add')
      .click();
    cy.contains('Add')
      .click();
    cy.get('.todo')
      .find('todo-item')
  })
})