describe('test 2 : edit card title', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
    cy.viewport(1600, 660)
  });

  it('edit card', function () {
    const cardselector = '#container > div.home > div.home-boards > div > div:nth-child(4) > div.cards-container > div:nth-child(2) > div'
    editCardTitle(cardselector, 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Consecteturtotamofficiismolestiaesimiliqueinundesuscipitvitaevelitvoluptateea!Excepturidolorumreprehenderitremlaborumculpamolestiassequicorruptilaudantium.')
  })

  function editCardTitle(_selector, _title) {
    // .get('#container > div.home > div.home-boards > div > div:nth-child(4) > div.cards-container > div:nth-child(2) > div') // _selector
    const _modal = _selector + ' > div:nth-child(1) > div > div > div > div.cardmodal-cols > div.cardmodal-main-wrapper > div.cardmodal-main'
    
    cy
      .get(_selector + ' > div')
      .click()
      .get(_modal + ' > div:nth-child(1) > div > div.cardmodal-button-container > button')
      .click()
      .get(_modal + ' > div:nth-child(1) > form > input[type=text]')
      .clear()
      .type(_title, { delay: 0})
      .get(_modal + ' > div:nth-child(1) > form > div > button:nth-child(1)')
      .click()
      .get(_modal)
      .should('contain.text', _title)
        .get(_modal + ' > div:nth-child(1) > div')
        .log('title text overflow here')
      .get(_selector + ' > div:nth-child(1) > div')
      .click('topLeft') // click outside modal
        .get(_selector + ' > div')
        .log('card text overflow here')
  }
})