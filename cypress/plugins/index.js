const cypressTypeScriptPreprocessor = require('./cy-ts-preprocessor');

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreprocessor);
};

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};

const lighthouse = require('lighthouse');

const reportGenerator = require('lighthouse/lighthouse-core/report/report-generator');

module.exports = (on, config) => {
  const lightConfig = require('lighthouse/lighthouse-core/config/lr-desktop-config.js');
  on('task', {
    lighthouseTest() {
      console.log('Test cy task');
      //   const report = await lighthouse(page.url(), opts, config).then(results => {
      //     return results;
      // });

      const opts = {
        chromeFlags: ['--headless'],
        logLevel: 'info',
        output: 'json',
        disableDeviceEmulation: true,
        defaultViewport: {
          width: 1200,
          height: 900
        },
        chromeFlags: ['--disable-mobile-emulation']
      };

      // // lighthouse('https://www.tsmc.com/english/careers/index.htm');
      lighthouse('https://www.tsmc.com/english/careers/index.htm', opts, lightConfig).then(results => {
        return results;
      });
      // const html = reportGenerator.generateReport(report.lhr, 'html');
      // const json = reportGenerator.generateReport(report.lhr, 'json');

      // fs.writeFile('report.html', html, err => {
      //   if (err) {
      //     console.error(err);
      //   }
      // });

      return 'hahaha';
    }
  });

  on('task', {
    log(message) {
      console.log(message);

      return null;
    }
  });
};
