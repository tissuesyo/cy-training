context('Pizza 1 test', () => {
  before(() => {
    cy.visit('https://www.tsmc.com/english/default.htm');
  });

  it('Detail information form field', () => {
    const viewOption = { capture: 'viewport' };
    // cy.setResolution([1000, 1200]);
    // cy.matchImageSnapshot(viewOption);

    cy.task('lighthouseTest').then(result => console.log(result));

    cy.task('log', 'yoyoyoyoyo');
  });

  // it('test case 2', () => {
  //   const viewOption = { capture: 'viewport' };
  //   cy.setResolution([1920, 2500]);
  //   cy.matchImageSnapshot(viewOption);
  // });
});
