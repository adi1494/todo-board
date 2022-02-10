describe('test 3 : add empty board', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
  });
  it('add empty boards', function () {
    addEmptyBoard();
  })
  it('add empty card in empty board', function () {
    addCard();
  })
})

const addEmptyBoard = () => {
  cy.get('#container > div.home > div.home-boards > div > div.addboard > div > button')
    .click()
    // .get('input[placeholder="Enter Board Title"]')
    // .type()
    .get('#container > div.home > div.home-boards > div > div.addboard > form > div > button:nth-child(1)')
    .click()
}

function addCard() {
  // find the board
  cy.get(`#container > div.home > div.home-boards > div`)
    .children()
    .find('.board-title')
    .eq(-1) // last added board
    .parent()
    .siblings()
    .as('cardadd') // alias the div inside board which contains addcard button

  // addcard
  cy.get('@cardadd')
    .find('button.icon-btn')
    .click()
    .get('@cardadd')
    .find('button[type="submit"]')
    .click()

  // check
  cy.get('@cardadd')
    .find('.card').should('exist')
}