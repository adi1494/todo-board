describe('test 3', function() {
  it('deletes card', function() {
    cy.visit('http://localhost:3000')

    deleteCard('WIP', 'wip 3')
  })
})

const deleteCard = (board, cardText) => {
  cy.get('.board')
    .contains(board)
    .parent()
    .siblings()
    .children()
    .contains(cardText)
    .siblings()
    .children()
    .contains('Delete Card')
    .click()
}