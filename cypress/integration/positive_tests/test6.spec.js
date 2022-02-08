// these tests do not work with react-beautiful-dnd

describe('test 6', () => {
  beforeEach(() => {
    cy.viewport(1600, 900)
    cy.visit('http://localhost:3000/home')
  })
  
  it('dnd from 4tw', () => {
    cy
      .get('#root > div > div > div.app-container > div > div:nth-child(3) > div.cards-container > div:nth-child(1)')
      .drag('#root > div > div > div.app-container > div > div:nth-child(2)')
      .then((success) => {
        assert.isTrue(success)
      })
  })

  it('move from 4tw', () => {
    cy
      .get('#root > div > div > div.app-container > div > div:nth-child(3) > div.cards-container > div:nth-child(1)')
      .move({ deltaX: 310, deltaY: 10 })
      .then((success) => {
        assert.isTrue(success)
      })
  })

  it('dispatch event', () => {
    const draggable = Cypress.$('#root > div > div > div.app-container > div > div:nth-child(3) > div.cards-container > div:nth-child(1)')  // Pick up this
    const droppable = Cypress.$('#root > div > div > div.app-container > div > div:nth-child(2)')  // Drop over this

    const coords = droppable.getBoundingClientRect()
    draggable.dispatchEvent(new MouseEvent('mousedown'));
    draggable.dispatchEvent(new MouseEvent('mousemove', {clientX: 10, clientY: 0}));
    draggable.dispatchEvent(new MouseEvent('mousemove', {
      clientX: coords.x+10,   
      clientY: coords.y+10  // A few extra pixels to get the ordering right
    }));
    draggable.dispatchEvent(new MouseEvent('mouseup'));
  
  });

  it('trigger', () => {
    cy.get("#root > div > div > div.app-container > div > div:nth-child(3) > div.cards-container > div:nth-child(1)").trigger("mousedown", {
      which: 1
    });
    cy.get("#root > div > div > div.app-container > div > div:nth-child(2)").trigger("mousemove")
      .get("#root > div > div > div.app-container > div > div:nth-child(2)")
      .trigger("mousemove")
      .trigger("mouseup")
    cy.get('#root > div > div > div.app-container > div > div:nth-child(2)')
      .should('contain', 'blocked 1')
  });
})