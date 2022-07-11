import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  videosFolder: 'reporters/reports/videos',
  defaultCommandTimeout: 10000,
  retries: 2,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporters/cypress-reporter.json',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:9999/',
    excludeSpecPattern: ['**/examples/**/*', '**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
})
