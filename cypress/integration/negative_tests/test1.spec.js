describe('test 1 : add empty card', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
  });

  it('add card', function () {
    addCard(1)
  })

  it('add card', function () {
    addCard(1)
  })
})

// title, board idx (idx starts from 1)
function addCard(idx) {
  if (idx < 1) return;
  cy.get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container > div.addcard > div > button`)
    .click()
    // .get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container > div.addcard > form > input[type=text]`)
    // // .click()
    // .type('')
    .get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container > div.addcard > form > div > button:nth-child(1)`)
    .click()

  cy.get(`#container > div.home > div.home-boards > div > div:nth-child(${idx}) > div.cards-container`)
    .should('contain.exist')
}