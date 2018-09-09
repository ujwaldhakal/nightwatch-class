'use strict'

module.exports = {
    //
    'testing pagevamp home page featured image' : function (browser) {
      browser.url("https://www.pagevamp.com/")
      .waitForElementVisible(".pv-banner-img__wrap",1000);

        browser.getAttribute(".pv-banner-img__wrap img", "src", function (result) {
            this.assert.equal(result.value, "https://www.pagevamp.com/images/banner.jpg");
        });
      browser.pause(3000);
      browser.end()
    },

    'testing if pricing tab works properly': function (browser) {

        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(2) a")

            .url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/pricing");
            })
            .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)

            .getText('.pv-title.m-t-0.pv-subtitle--white', function (result) {
                this.assert.equal(result.value, "Pricing");
                console.log(result);
            })
            .end();

    }

}
