const { defineConfig } = require('cypress');
const { configureVisualRegression } = require('cypress-visual-regression');

module.exports = defineConfig({
  e2e: {
    env: {
      // https://github.com/cypress-visual-regression/cypress-visual-regression?tab=readme-ov-file#plugin-options
      visualRegressionType: 'regression', // 'base' to generate new images, 'regression' to compare with the base images
      visualRegressionBaseDirectory: 'cypress/snapshots/base', // directory for the baseline images
      visualRegressionDiffDirectory: 'cypress/snapshots/diff', // directory for the diff images
      visualRegressionGenerateDiff: 'fail', // 'fail' , 'never', 'always' - determines when image diffs are generated
      visualRegressionFailSilently: false, // should visual errors fail the test run or be ignored
      visualRegressionErrorThreshold: 0.2,
      errorThreshold: 0.15
    },
    screenshotsFolder: './cypress/snapshots/actual',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureVisualRegression(on);
    },
  },
});
