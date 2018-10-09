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
    },




//Next Task//



    'testing if footer logo working or not': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-logo")
    		.url(function (result){
    	this.assert.equal(result.value,"https://www.pagevamp.com/us")
   })
		.end();

    	},


    	'testing Footer Get Pagevamp': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.execute('window.scrollTo(0,document.body.scrollHeight);')
    		.click(".pv-getpv a")
    		.pause(1000)
    		.waitForElementVisible('#pv-continue-modal',1000)
    
		.end();

    	},


    	'testing Footer Login': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer__login")
    		.pause(1000)
    		.waitForElementVisible('#pv-login-modal',3000)

    	.end();
    },


    'testing for Footer About': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-list li:nth-child(1) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/about");
            })
            .waitForElementVisible(".pv-section--sm", 1000)
            .getText('.pv-subtitle--white', function (result) {
            	this.assert.equal(result.value, "About Us");
             console.log(result);
            })
            .end();
        },


    'testing for Footer Features': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-list li:nth-child(2) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/features");
            })
            .waitForElementVisible(".pv-section--sm", 1000)
            .getText('.pv-subtitle--white', function (result) {
            	this.assert.equal(result.value, "Pagevamp Features");
             console.log(result);
            })
            .end();
        },

    'testing for Footer Partners': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-list li:nth-child(4) a")	
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


    'testing for Footer Pricing': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-list li:nth-child(5) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/pricing");
            })
            .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
            .getText('.pv-title.m-t-0.pv-subtitle--white', function (result) {
                this.assert.equal(result.value, "Pricing");
                console.log(result);
            })
            .end();
  },



    'testing for Footer Business Spotlight': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-list li:nth-child(6) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://spotlight.pagevamp.com/");
            })

            .end();

    },


    'testing for Footer Contact': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click("#contact-footer-link")	
    		.pause(1000)
     		.waitForElementVisible('.intercom-messenger-frame.intercom-messenger-frame-enter-done',3000)
            
            .end();
        },


    'testing for Footer Terms of Service': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-bot--links li:nth-child(1) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/privacypolicy-terms?terms");
            })
			.waitForElementVisible(".pv-section.pv-section--sm.pv-smb.pv-section--center", 1000)
            .getText('.pv-title.m-t-0.pv-subtitle--white', function (result) {
                this.assert.equal(result.value, "Privacy Policy for Pagevamp");
                console.log(result);
            })
            .end();
        },


   'testing for Footer Privacy Policy': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-bot--links li:nth-child(2) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/privacypolicy-terms");
            })
			.waitForElementVisible(".pv-section.pv-section--sm.pv-smb.pv-section--center", 1000)
            .getText('.pv-title.m-t-0.pv-subtitle--white', function (result) {
                this.assert.equal(result.value, "Privacy Policy for Pagevamp");
                console.log(result);
            })
            .end();
        },


   'testing for Footer Getting Started': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-bot--links li:nth-child(3) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/us/getting-started");
            })
			.waitForElementVisible(".pv-section.pv-section--sm.pv-smb.pv-section--center", 1000)
            .getText('.pv-title.m-t-0.pv-subtitle--white', function (result) {
                this.assert.equal(result.value, "Getting Started");
                console.log(result);
            })
            .end();
        },


   'testing for Start for Free': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click(".btn--green.pv-cta__btn.pv-continue")	
            .waitForElementVisible("#pv-continue-modal", 9000)
	        .getText('#continue-with-facebook', function (result) {                                                                                                                                                                                                              
                 	this.assert.equal(result.value, "Continue with Facebook");
                 console.log(result);
            })
            .end();
        },


    'testing for Spanish Language' :function (browser){
    	browser
    	.url("https://www.pagevamp.com/")
    	.click(".dropdown-toggle")
    	.click(".dropdown-menu.dropdown-menu-right a")
    	.waitForElementVisible(".navbar-right li:nth-child(1) a",1000)
    	.getText('#how-it-works-link', function (result) {
        this.assert.equal(result.value, "Cómo funciona");
        console.log(result);
            })
            .end();
    },


    'testing for Indonesian Language' :function (browser){
      browser
      .url("https://www.pagevamp.com/")
      .click(".dropdown-toggle")
      .click(".dropdown-menu.dropdown-menu-right li:nth-child(2) a")
      .waitForElementVisible(".navbar-right li:nth-child(1) a",1000)
      .getText('#how-it-works-link', function (result) {
        this.assert.equal(result.value, "Bagaimana ini bekerja");
        console.log(result);
            })
            .end();
    },


    'testing for Italian Language' :function (browser){
      browser
      .url("https://www.pagevamp.com/")
      .click(".dropdown-toggle")
      .click(".dropdown-menu.dropdown-menu-right li:nth-child(3) a")
      .waitForElementVisible(".navbar-right li:nth-child(1) a",1000)
      .getText('#how-it-works-link', function (result) {
        this.assert.equal(result.value, "Come funziona");
        console.log(result);
            })
            .end();
    },


    'testing for Vietnamese Language' :function (browser){
      browser
      .url("https://www.pagevamp.com/")
      .click(".dropdown-toggle")
      .click(".dropdown-menu.dropdown-menu-right li:nth-child(4) a")
      .waitForElementVisible(".navbar-right li:nth-child(1) a",1000)
      .getText('#how-it-works-link', function (result) {
        this.assert.equal(result.value, "Cách thức hoạt động của website");
        console.log(result);
            })
            .end();
    },




    'testing for Thai Language' :function (browser){
      browser
      .url("https://www.pagevamp.com/")
      .click(".dropdown-toggle")
      .click(".dropdown-menu.dropdown-menu-right li:nth-child(5) a")
      .waitForElementVisible(".navbar-right li:nth-child(1) a",1000)
      .getText('#how-it-works-link', function (result) {
        this.assert.equal(result.value, "เราาทำงานอย่างไร");
        console.log(result);
            })
            .end();
    },

    'testing for cookie policy banner for Italian' :function (browser){
      browser
        .url("https://www.pagevamp.com/?desh=it")
        .waitForElementVisible("  .pv-cookie ", 1000)
        .getText('.pv-cookie__alert', function(result){
          this.assert.equal(result.value.replace(/\s/g,''),"×Questositoutilizzacookieperilfunzionamentoelamiglioregestionedelsito.Icookietecniciedianalisistatisticasonogiastatiimpostati.Permaggioriinformazioni,consultalanostraCookiePolicy.Proseguendo,acconsentiall’utilizzodicookie.Accetto");
          console.log(result);
        })
        .end();
    },




    'testing for cookie policy banner for Spanish' :function (browser){                                                                                                                                                                                                                              
      browser
        .url("https://www.pagevamp.com/?desh=es")
        .waitForElementVisible("  .pv-cookie ", 1000)
        .getText('.pv-cookie__alert', function(result){
          this.assert.equal(result.value.replace(/\s/g,''),"×Alusarestesitiowebustedconsienteelusodecookies.Lascookiespuedenseradministradasenlaconfiguracióndesunavegadorwebodesudispositivo.Paramásinformación,porfavorrevisenuestraPolíticadecookies.");
          console.log(result);
        })
        .end();
    },


      'testing Distributore Italiano ' : function (browser) {
            browser
            .url("https://www.pagevamp.com/?desh=it")
            .waitForElementVisible(".pv-distributor",1000)
            .getText('.pv-distributor__title', function(result){
          this.assert.equal(result.value,"Distributore Italiano:");
          console.log(result);
        })
        .end();
              
          },

          'testing sediin logo' : function (browser) {
              browser
              .url("https://www.pagevamp.com/?desh=it")
               browser.getAttribute(".pv-distributor img" , "src", function (result) {
              this.assert.equal(result.value, "https://www.pagevamp.com/images/logo-sediin.png");
              });
            browser.end();
    },


      'testing Watch it in action' : function (browser) {
        browser
          .url("https://www.pagevamp.com/")
          .click("#how-it-works-section .link") 
          .pause(1000)
          .waitForElementVisible('.modal-body.modal-body--sm.text-center',3000)
          .end();
        }

        }

 


    


    





