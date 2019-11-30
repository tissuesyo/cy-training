describe.skip('Exercise 4 Network', () => {
  it('Mock query result', () => {
    // enable response stubbing
    // cy.server();

    // const brandData = [{ id: 1, label: 'Google', value: 'Google' }];
    // cy.fixture('brand.json').as('brand');

    // cy.route({
    //   method: 'GET', // Route all GET requests
    //   url: '/brand', // that have a URL that matches '/brand'
    //   response: '@brand' // and force the response to be: []
    // });

    // cy.visit('http://localhost:9487/query');

    cy.fixture('brand.json').as('brandData');

    cy.server(); // enable response stubbing

    cy.route({
      method: 'GET', // Route all GET requests
      url: '/brand', // that have a URL that matches '/brand'
      response: '@brandData' // and force the response to be: []
    });

    cy.visit('http://localhost:9487/query');

    cy.route('GET', '/query/**', 'fixture:brand'); // this works
    cy.route('GET', '/query/**', 'fx:brand'); // this also works
  });
});
