'use strict'

module.exports = { 

    'Testing Pagevamp logo' : function (browser) {
        browser
        .url("https://www.pagevamp.com/")
        .waitForElementVisible("#topmost-nav a.pv-logo",1000)
        .click("#topmost-nav a.pv-logo")
        .url(function(result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/");  //clicking Pagevamp logo

            })
        .pause(3000)
        .end();
    },

    'Testing if "How it works" is working' : function (browser) {
        browser
        .url("https://www.pagevamp.com/")
        .click(".navbar-right li:nth-child(1) a")
        .url(function(result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/#how-it-works");   //scroll to How it work section
                this.assert.containsText("#how-it-works-section","Website in seconds");     //testing "Website in seconds" text
                this.assert.attributeContains(".link","data-target","#how-it-works-video");  //testing "Watch it in action" link
            })
        .pause(3000)
        .end();
    },

    
    'Testing if pricing tab works properly': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(2) a")
            .url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/pricing");  //Pricing page url
                })
            .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
            .assert.containsText(".pv-title","Pricing")            // testing if page contains "Pricing" text      
            .click("#topmost-nav a.pv-logo")
            .url(function(result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/");
            })
            .end();
     },

     'Testing if Partners link works': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(3) a")
            .assert.urlEquals('https://reseller.pagevamp.com/')
            .end();
    },


    'Testing if Features tab works properly': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(4) a")
            .url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/features");  //Feature page url
                })
            .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
            .assert.containsText(".pv-title","Pagevamp Features")     // testing if feature page header text     
            .click("#topmost-nav a.pv-logo")
            .url(function(result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/");
            })
            .end();
     },

    'Testing Login modal popup ': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(5) a")
            .expect.element('.modal-content').to.be.present;   // testing Login popup
             browser.assert.elementPresent("#login-pv-continue")   // Checking "Log in with Facbook" button in modal
             .end();
     },


    'Testing Get Pagevamp modal popup ': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(6) a")
            .expect.element('.modal-content').to.be.present;   // testing Get Pagevamp popup
             browser.assert.elementPresent("#login-fb")   // Checking "Continue with Facebook" button in modal
             .end();
     },

    'Testing if Language dropdown is working': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(7) a");
            browser.click(".dropdown-toggle", function(response){    
                browser.assert.elementPresent(".dropdown-menu")      //checking dropdown toggle
                    .assert.containsText(".dropdown-menu", "Spanish")  //checking dropdown menu items
                    .assert.containsText(".dropdown-menu", "Indonesian")
                    .assert.containsText(".dropdown-menu", "Italian")
                    .assert.containsText(".dropdown-menu", "Vietnamese")
                    .assert.containsText(".dropdown-menu", "Thai");

            })
             .end();
     }



}
    
