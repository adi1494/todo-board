describe('test 1', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });

  it ('adds a card and checks success', function() {    
    addCard('new card')
    addCard('another new card')
  })
})

function addCard (cardText){
  cy.get('#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container > div.addcard > div > button')
    .click()
    .get('#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container > div.addcard > form > input[type=text]')
    // .click()
    .type(cardText)
    .get('#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container > div.addcard > form > div > button:nth-child(1)')
    .click()
    
  cy.get('#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container')
    .should('contain', cardText)
}
