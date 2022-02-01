describe('test 4', function () {
  it('trying drag and drop', function () {
    cy.visit('http://localhost:3000')

    // cy.contains('blocked 1')
    //   // .click()
    //   .click({release:false})
    //   .get('.board')
    //   .contains('WIP')
    //   .trigger('mouseover')

    // cy.get('#root > div > div > div.app-container > div > div:nth-child(3) > div.card-container > div:nth-child(1)')
    //   .trigger('mouseover')
    //   .trigger('mousedown', {which: 1})
    //   .trigger('mousemove', {clientX: 500, clientY: 500})
    //   .trigger('mouseup', {force: true})


    cy.get('#root > div > div > div.app-container > div > div:nth-child(3) > div.card-container > div:nth-child(1)')
      .trigger('dragstart')
    cy.get('#root > div > div > div.app-container > div > div:nth-child(2)')
      .trigger('drop')
  })
})