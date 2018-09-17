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
                this.getAttribute("#how-it-works-video iframe", "src",function(result){
                        this.assert.equal(result.value,"https://www.youtube.com/embed/09Y0Xz_bTpM?enablejsapi=1");
                });
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
     },

     'Testing if Partners link works': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(3) a")
            .assert.urlEquals('https://reseller.pagevamp.com/')
            .getText(".pv-banner h1" , function(result){
                this.assert.equal(result.value,"Pagevamp Reseller Program")
            })
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
            .end();
     },

    'Testing Login modal popup ': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(5) a")
            .waitForElementVisible("#pv-login-modal",1000)
            .getText("#login-pv-continue", function(result){
                this.assert.equal(result.value,"Log in with Facebook")
            })
            .end();
     },

    'Testing Get Pagevamp modal popup ': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(6) a")
            .waitForElementVisible("#pv-continue-modal",1000)
            .getText("#login-fb", function(result){
                this.assert.equal(result.value,"Continue with Facebook")
            })
             .end();
     },

    'Testing if Language dropdown is working': function (browser) {    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(7) a");
            browser.click(".dropdown-toggle", function(response){    
                browser.assert.visible(".dropdown-menu")      //checking dropdown toggle
                    .assert.containsText(".dropdown-menu", "Spanish")  //checking dropdown menu items
                    .assert.containsText(".dropdown-menu", "Indonesian")
                    .assert.containsText(".dropdown-menu", "Italian")
                    .assert.containsText(".dropdown-menu", "Vietnamese")
                    .assert.containsText(".dropdown-menu", "Thai");
            })
             .end();
     }



}
    
