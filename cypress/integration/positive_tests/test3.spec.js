describe('test 3 : add card subtasks', function () {
  before(() => {
    cy.visit('http://localhost:3000/home');
  });

  it('add subtask', function () {
    const _card = '#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container > div:nth-child(2) > div'
    addSubtask(_card, 'subtask title 1')
  })

  it('edit subtask', function () {
    const _card = '#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container > div:nth-child(2) > div'
    editSubtask(_card, 'new subtask title', 'new description', 0)
  })

})

const addSubtask = (_card, _title) => {
  const _modal = _card + '> div:nth-child(1) > div > div > div > div.cardmodal-cols > div.cardmodal-main-wrapper > div.cardmodal-main';
  cy.get(_card + ' > div') // card
    .click()
    .get(_modal + '> div.cardmodal-main-subtask > div.cardmodal-main-subtask-heading > div.cardmodal-main-subtask-heading-buttons > button') // subtask add button
    .click()
    .get(_modal + ' > div.cardmodal-main-subtask > div.cardmodal-main-subtask-heading > form > input[type=text]') // subtask input field
    .type(_title)
    .get(_modal + ' > div.cardmodal-main-subtask > div.cardmodal-main-subtask-heading > form > div > button:nth-child(1)') // check
    .click()
  cy.get(_modal + ' > div.cardmodal-main-subtask')
    .should('contain.text', _title);
  cy.get(_card + ' > div:nth-child(1) > div')
    .click('topLeft') // click outside modal
}

// idx starts from 0
const editSubtask = (_card, _title, _desc, idx) => {
  const _modal = _card + '> div:nth-child(1) > div > div > div > div.cardmodal-cols > div.cardmodal-main-wrapper > div.cardmodal-main';
  cy.get(_card + ' > div') // card
    .click()
    .get(_modal + ' > div.cardmodal-main-subtask > div.subtasks')
    .children()
    .eq(idx)
    // .contains(oldtitle) // could use this instead of index but need old title
    .as('subtask')

  cy.get('@subtask')
    .find('button[title="Edit Subtask"]')
    .click()
  cy.get('@subtask')
    .find('input')
    .clear()
    .type(_title)
    .get('@subtask')
    .find('textarea')
    .clear()
    .type(_desc)
    .get('@subtask')
    .find('button[title="Confirm"]')
    .click()
}