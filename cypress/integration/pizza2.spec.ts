context('Pizza 2 test', () => {
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
    cy.get('[data-cy="name"]').type('Tissue');
    cy.contains('yoyo');
  });
});
