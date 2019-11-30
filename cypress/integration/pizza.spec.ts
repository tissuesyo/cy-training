context('Pizza 1 test', () => {
  before(() => {
    cy.visit('http://localhost:9487/pizza');
  });

  it('Detail information form field', () => {
    // cy.get("input[formcontrolname='mailToList']").should('have.class', 'ant-input-disabled');
    // cy.get('h2#id='detailTitle')
    cy.contains('Enter your details');
    cy.contains('Choose your pizzas');
    cy.contains('Choose your pizzas');
  });

  it('Detail information form field', () => {
    // cy.get("input[formcontrolname='mailToList']").should('have.class', 'ant-input-disabled');

    cy.contains('Enter your details');
    cy.contains('Choose your pizzas');

    cy.setResolution([1000, 800]);
    cy.matchImageSnapshot();

    // cy.get('[data-cy="name"]')
    //   .type('Tissue Chu')
    //   .then(() => {
    //     cy.setResolution([1000, 800]);
    //     cy.matchImageSnapshot();
    //   });
  });

  // it('Detail information form field', () => {
  //   cy.get('[data-cy="name"]')
  //     .clear()
  //     .type('Tissue')
  //     .then(() => {
  //       cy.setResolution([1000, 720]);
  //       cy.matchImageSnapshot();
  //     });
  // });
});
