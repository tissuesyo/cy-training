context('Pizza 1 test', () => {
  before(() => {
    cy.visit(
      'https://www.library.ntpc.gov.tw/MainPortal/htmlcnt/doquerysinglehtmlcnt/64e667d034f34006ae5c787052995c05'
    );
  });

  it('Detail information form field', () => {
    const viewOption = { capture: 'viewport' };
    cy.setResolution([1000, 1200]);
    cy.matchImageSnapshot(viewOption);
  });

  it('test case 2', () => {
    const viewOption = { capture: 'viewport' };
    cy.setResolution([1920, 2500]);
    cy.matchImageSnapshot(viewOption);
  });
});
