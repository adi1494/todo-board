describe('test 2', function() {
  it ('checks and unchecks cards', function() {
    cy.visit('http://localhost:3000/')
    // cy.pause();

    checkCard('Blocked', 'blocked 1')
    checkCard('Blocked', 'blocked 2')
    uncheckCard('Blocked', 'blocked 1')
    // deleteCard('WIP', 'wip 3');

  })
})

const checkCard = (board, cardText) => {
  cy.get('.board')
    .contains(board)
    .parent()
    .siblings()
    .children()
    .should('have.class', 'card-container')
    .contains(cardText)
    .siblings()
    .children()
    .contains('Check')
    .click()
}

const uncheckCard = (board, cardText) => {
  cy.get('.board')
    .contains(board)
    .parent()
    .siblings()
    .children()
    .should('have.class', 'card-container')
    .contains(cardText)
    .siblings()
    .children()
    .contains('Uncheck')
    .click()
}