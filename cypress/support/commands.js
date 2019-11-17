/// <reference types="cypress" />
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
const addContext = require('mochawesome/addContext');

addMatchImageSnapshotCommand({
  failureThreshold: 0.0,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'viewport',
  customSnapshotsDir: 'cypress/snapshots',
  customDiffDir: 'cypress/report/mochawesome-report/diff'
});

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1]);
  } else {
    cy.viewport(size);
  }
});

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed).png`;
    addContext({ test }, `assets/${Cypress.spec.name}/${screenshotFileName}`);

    // pixel diff
    const pixelDiffFileName = `${runnable.parent.title} -- ${test.title}.diff.png`;
    addContext({ test }, `diff/${Cypress.spec.name}/${pixelDiffFileName}`);
  }
});
