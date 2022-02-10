describe("Drag and Drop", () => {
  
  before(() => {
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop');
  });
  
  it('should drag fried chicken to the order', () => {
    const dataTransfer = new DataTransfer();
    
    cy.get('#menu-fried-chicken').trigger('dragstart', {
      dataTransfer
    });
    
    cy.get('#plate').trigger('drop', {
      dataTransfer
    });
  });
  
  it('should drag ice cream to the order', () => {
    cy.get('#menu-ice-cream').drag('#plate-items');
  });
  
});

// describe('test 6', () => {
//   beforeEach(() => {
//     cy.viewport(1600, 900)
//     cy.visit('http://localhost:3000/home')
//   })

//   const source = '#container > div.home > div.home-boards > div > div:nth-child(3) > div.cards-container > div:nth-child(1) > div > div'
//   const target = '#container > div.home > div.home-boards > div > div:nth-child(4)'

//   it('dnd with datatransfer', () => {
//     const dataTransfer = new DataTransfer();
    
//     cy.get(source).trigger('dragstart', {
//       dataTransfer
//     });
    
//     cy.get(target).trigger('drop', {
//       dataTransfer
//     });
//   });
  
//   it('dnd with 4tw plugin', () => {
//     cy.get(source).drag(target);
//   });
// })