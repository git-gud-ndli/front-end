// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "some e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.containsText("h1", "Survivor")
      .assert.containsText(".v-toolbar__title", "GIT-GUD(1) - Nuit de L'Info")
      .end();
  }
};
