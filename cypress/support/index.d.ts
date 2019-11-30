declare namespace Cypress {
  interface Chainable<Subject = any> {
    setResolution(size: number[]): Chainable<Subject>;
    matchImageSnapshot(any): Chainable<Subject>;
  }
}
