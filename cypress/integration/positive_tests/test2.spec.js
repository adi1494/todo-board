describe('test 2', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });

  it ('edits card details', function() {
    const cardselector = '#container > div.home > div.home-boards > div > div:nth-child(4) > div.cards-container > div:nth-child(2) > div'
    editCardTitle(cardselector, 'new card title')
    editCardTitle(cardselector, 'changed again')
  })
  
  function editCardTitle(_cardselector, _text){
    // .get('#container > div.home > div.home-boards > div > div:nth-child(4) > div.cards-container > div:nth-child(2) > div') // _cardselector
    const cardmodalselector = _cardselector + ' > div:nth-child(1) > div > div > div > div.cardinfo-cols > div.cardinfo-main-wrapper > div.cardinfo-main'
    cy.get(_cardselector + ' > div')
    .click()
    .get(cardmodalselector + ' > div.cardinfo-main-title > div.cardinfo-button-container > button')
    .click()
    .get(cardmodalselector + ' > form > input[type=text]')
    .clear()
    .type(_text)
    .get(cardmodalselector + ' > form > div > button:nth-child(1)')
    .click()
    .get(_cardselector + ' > div:nth-child(1) > div')
    .click('topLeft') // click outside modal
    .get(_cardselector)
    .should('contain', _text)
    console.log(cardmodalselector)
  }
})