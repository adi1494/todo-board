describe('test 2', function () {
  it('gets specific element', function () {
    cy.visit('http://localhost:3000/')

    // add todo
    cy.get('.text-field')
      .type('first todo')
      .should('have.value', 'first todo');
    cy.contains('Add')
      .click();
    // add todo
    cy.get('.text-field')
      .type('second todo')
      .should('have.value', 'second todo');
    cy.contains('Add')
      .click();

    // add todo
    cy.get('.text-field')
      .type('third todo')
      .should('have.value', 'third todo');
    cy.contains('Add')
      .click();

    // checks 2nd todo
    cy.contains('second todo')
      .parent()
      .contains('check')
      .click();

    // add todo
    cy.get('.text-field')
      .type('fourth todo')
      .should('have.value', 'fourth todo');
    cy.contains('Add')
      .click();

    // delete 3rd todo
    cy.contains('third todo')
      .parent()
      .contains('delete')
      .click();
  })
})