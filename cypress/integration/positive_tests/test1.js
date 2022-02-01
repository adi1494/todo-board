describe('test 1', function() {
  it ('adds new todo card', function() {
    cy.visit('http://localhost:3000/')
    // cy.pause();
    
    addCard('To Do', 'new card')
    addCard('Testing', 'another new card')
  })
})

const addCard= (board, cardText) => {
  cy.get('.board')
    .contains(board)
    .parent()
    .parent()
    .contains('Add Card')
    .click()
    .get('input')
    .type(cardText)
    .get('.button-13')
    .contains('Add')
    .click()
}