const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
};

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
