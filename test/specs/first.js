'use strict'
module.exports = {
    
    
    'testing if partners tab works properly': function (browser) {
    
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(3) a")
            .url(function (result) {
                this.assert.equal(result.value, "https://reseller.pagevamp.com/");
            })
            .waitForElementVisible("#host-carousel", 1000)
            .getText('.carousel-caption h1', function (result) {
            	this.assert.equal(result.value, "Pagevamp Reseller Program");
             console.log(result);
            })
            .end();
    
    },


    'testing if Features tab is working or not': function (browser){
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(4) a")
            .url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/features");
            })
            .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
            .getText('.pv-title.m-t-0.pv-subtitle--white', function (result) {
                this.assert.equal(result.value, "Pagevamp Features");
                console.log(result);
            })
            .end();
    },

    'testing if Login opens or not.': function (browser) {
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(5) a")
            .waitForElementVisible(".modal-body.modal-body--login.text-center", 1000)
            
    
            .end();
    },

    'testing Get Pagevamp.': function (browser) {
        browser.url("https://www.pagevamp.com/")
	            .click(".navbar-right li:nth-child(6) a")
	            .waitForElementVisible("#pv-continue-modal", 9000)
	            .getText('#continue-with-facebook', function (result) {                                                                                                                                                                                                              
                 	this.assert.equal(result.value, "Continue with Facebook");
                 console.log(result);
            })
    
            .end();
        },

    'testing pagevamp logo' : function (browser) {
      	browser
      			.url("https://www.pagevamp.com/")
      			.click(".navbar-brand.pv-logo")
      		   	.waitForElementVisible(".pv-banner-img__wrap",1000)
				.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/");
            })
    
            .end();
    }

    }
    





