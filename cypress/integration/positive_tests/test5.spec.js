describe('test 5', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/home');
  });

  const keyCodes = {
    tab: 9,
    enter: 13,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    arrowLeft: 37,
    arrowUp: 38,
    arrowRight: 39,
    arrowDown: 40,
  };

  const timings = {
    outOfTheWay: 0.2,
    // greater than the out of the way time
    // so that when the drop ends everything will
    // have to be out of the way
    minDropTime: 0.33,
    maxDropTime: 0.55,
  };

  it('react-beautiful-dnd reorder lists', () => {
    // test works
    // not exactly drag and drop
    // cypress takes in keypresses on focused elements
    cy.get('#container > div.home > div.home-boards > div > div:nth-child(1) > div.cards-container > div:nth-child(1) > div > div')
      .then(($label) => {
        const id = $label.attr('data-rbd-draggable-id')
        console.log(id)
        const card = 'div[data-rbd-draggable-id=' + id + ']'
        moveRight(card)
        moveRight(card)
        moveDown(card)
        moveLeft(card)
        moveUp(card)
      })
  });

  function movefunc(_cardselector) {
    cy.get(_cardselector)
      .as('first')

    // cy.get('#container > div.app > div.app-boards > div > div:nth-child(1) > div.cards-container > div:nth-child(2) > div > div > div:nth-child(1)')
    // no need of dropzone element

    cy.get('@first')
      // .closest('draggableId')
      // .focus()
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      .wait(timings.outOfTheWay * 1000)
      // finishing before the movement time is fine - but this looks nice
      .trigger('keydown', { keyCode: keyCodes.space, force: true });
  }

  function moveRight(_cardselector) {
    cy.get(_cardselector)
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowRight, force: true })
      // use keypresses to move between rows
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });
  }

  function moveLeft(_cardselector) {
    cy.get(_cardselector)
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowLeft, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });
  }

  function moveUp(_cardselector) {
    cy.get(_cardselector)
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowUp, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });
  }

  function moveDown(_cardselector) {
    cy.get(_cardselector)
      .trigger('keydown', { keyCode: keyCodes.space })
      .trigger('keydown', { keyCode: keyCodes.arrowDown, force: true })
      .wait(timings.outOfTheWay * 1000)
      .trigger('keydown', { keyCode: keyCodes.space, force: true });
  }
});