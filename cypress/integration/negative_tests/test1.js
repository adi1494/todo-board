describe('test 1', function () {
  it('adds empty board and card', function () {
    cy.visit('http://localhost:3000')

    addEmptyBoard() // adds board with no title
    
    addEmptyCard() // adds empty card on the empty titled board
  })
})

const addEmptyBoard = () => {
  cy.get('.addboard')
    .click()
    .get('input[placeholder="Enter Board Title"]')
    .siblings()
    .children()
    .contains('Add')
    .click()
}

const addEmptyCard = () => {
  cy.get('.board-title')
    .each(($ele) => {
      if ($ele.text() === ''){
        cy.get($ele)
          .parent()
          .siblings()
          .children()
          .contains('Add Card')
          .click()
      }
    }
  )
  cy.get('.addcard-edit button')
    .contains('Add')
    .click()
}