describe('test 5', function() {
  it('adds and deletes boards', function() {
    cy.visit('http://localhost:3000')

    addBoard('New Board');
    addBoard('Another New Board');
    delBoard('Blocked');
  })
})

const addBoard = (title) => {
  cy.get('.addboard')
    .click()
    .get('input[placeholder="Enter Board Title"]')
    .type(title)
    .siblings()
    .children()
    .contains('Add')
    .click()
}

const delBoard = (title) => {
  cy.get('.board')
    .contains(title)
    .siblings()
    .contains('Delete Board')
    .click()
}