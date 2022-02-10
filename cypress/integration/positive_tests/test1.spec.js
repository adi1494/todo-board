describe('test 1 : card add and delete', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
  });

  it('add card', function () {
    addCard('new card', 1)
  })

  it('add card', function () {
    addCard('another new card', 1)
  })

  it('delete card', function () {
    deleteCard('#container > div.home > div.home-boards > div > div:nth-child(2) > div.cards-container > div:nth-child(4) > div') // delete wip 4
  })
})

// title, board idx (idx starts from 1)
function addCard(cardText, idx) {
  if (idx < 1) return;
  cy.get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container > div.addcard > div > button`)
    .click()
    .get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container > div.addcard > form > input[type=text]`)
    // .click()
    .type(cardText)
    .get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container > div.addcard > form > div > button:nth-child(1)`)
    .click()

  cy.get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container`)
    .should('contain.text', cardText)
}

// .card wrapper
function deleteCard(_selector) {
  cy.get(_selector + ' > div')
    .click()
    .get(_selector + ' > div:nth-child(1) > div > div > div > div.cardmodal-header > div.cardmodal-button-container > button:nth-child(1)')
    .click({ force: true })

  cy.get(_selector + ' > div')
    .should('not.exist');
}
