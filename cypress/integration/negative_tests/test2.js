describe('test 1', function () {
  it('adds empty board and card', function () {
    cy.visit('http://localhost:3000')

    editCardToEmpty('Testing', 'testing 1')
  })
})

const editCardToEmpty = (board, cardText) => {
  cy.get('.board')
    .contains(board)
    .parent()
    .siblings()
    .children()
    .should('have.class', 'card-container')
    .contains(cardText)
    .siblings()
    .children()
    .contains('Edit')
    .click()
    .get('.card-container input')
    .clear()
    .siblings()
    .contains('Add')
    .click()
}