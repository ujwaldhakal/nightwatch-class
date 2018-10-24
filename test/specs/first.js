'use strict'
module.exports = {
 
     'testing pagevamp logo, reload the page' : function (browser) {
       browser
           .url("https://www.pagevamp.com/")
           .click(".navbar-brand.pv-logo")
             .waitForElementVisible(".pv-banner-img__wrap",1000)
       .url(function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/");
            })
    
            .end();
    },



    'testing footer logo, reloads the page': function (browser) {
     browser
       .url("https://www.pagevamp.com/")
       .click(".pv-footer-logo")
       .url(function (result){
     this.assert.equal(result.value,"https://www.pagevamp.com/us")
   })
   .end();

     }, 


      'testing How it work, scroll down to How it work': function (browser) { 
         browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(1) a")
            .getText('#how-it-works-section .pv-subtitle', function (result) {
            this.assert.equal(result.value, "HOW IT WORKS");
              console.log(result);
            })
            .end();
          },


      'testing pricing tab, opens pricing page': function (browser) {
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
     },

      'testing for Footer Pricing, opens pricing page': function (browser) {
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

    
      'testing partners tab,opens reseller page': function (browser) {
    
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


      'testing for Start for Free, continue with facebook popup': function (browser) {
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



      'testing Watch it in action, youtube video popup' : function (browser) {
        browser
          .url("https://www.pagevamp.com/")
          .click("#how-it-works-section .link") 
          .pause(1000)
          .waitForElementVisible('.modal-body.modal-body--sm.text-center',3000)
          .end();
        },


      'testing Becomes a partner, opens reseller page': function (browser) {
    
        browser.url("https://www.pagevamp.com/")
            .click(".pv-header-group.text-center .link")
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


      'testing for Footer Partners, opens reseller page': function (browser) {
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


      'testing if Features tab, opens Pagevamp feature Page': function (browser){
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


      'testing for View all features, open feature page.' :function (browser){
     browser
      .url("https://www.pagevamp.com/")
      .click(".pv-features .link")
      .url(function (result) {
        this.assert.equal(result.value, "https://www.pagevamp.com/us/features");
            })

            .end();
    },



      'testing for Footer Features, opens Pagevamp feature Page': function (browser) {
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
      'testing Login,Login with facebook popup box appear.': function (browser) {
        browser.url("https://www.pagevamp.com/")
            .click(".navbar-right li:nth-child(5) a")
            .waitForElementVisible(".modal-body.modal-body--login.text-center", 1000)
            
    
            .end();
    },


      'testing Footer Login,Login with facebook popup box appear.': function (browser) {
      browser
       .url("https://www.pagevamp.com/")
       .click(".pv-footer__login")
       .pause(1000)
       .waitForElementVisible('#pv-login-modal',3000)

     .end();
    },

      'testing Get Pagevamp, continue with facebook popup box appear.': function (browser) {
        browser.url("https://www.pagevamp.com/")
	            .click(".navbar-right li:nth-child(6) a")
	            .waitForElementVisible("#pv-continue-modal", 9000)
	            .getText('#continue-with-facebook', function (result) {                                                                                                                                                                                                              
                 	this.assert.equal(result.value, "Continue with Facebook");
                 console.log(result);
            })
    
            .end();
        },


     'testing Footer Get Pagevamp, continue with facebook popup box appear': function (browser) {
      browser
       .url("https://www.pagevamp.com/")
       .execute('window.scrollTo(0,document.body.scrollHeight);')
       .click(".pv-getpv a")
       .pause(1000)
       .waitForElementVisible('#pv-continue-modal',1000)
    
   .end();

     },


      'testing for See Pricing details, opens pricing page': function (browser) {
      browser
       .url("https://www.pagevamp.com/")
       .click(".pv-title-support .link") 
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



      'testing for Footer About, opens about page': function (browser) {
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



      'testing Annual Plan for US': function (browser){
         browser
          .url("https://www.pagevamp.com/")
          .pause(6000)
          .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
          .getText('.plan-box__pricing', function (result) {
                        this.assert.equal(result.value, "$ 12\nper month");
                        console.log(result);
                  })
          .end();

        },


      'testing Monthly Plan for Us': function (browser){
        browser
        .url("https://www.pagevamp.com/")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "$ 15\nper month");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for italy': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=it")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "€ 144+IVA\nall'anno");
                      console.log(result);
                })
        .end();

      },


      'testing Monthly Plan for italy': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=it")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "€ 15+IVA\nal mese");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Spain': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=es")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "€ 144\npor año");
                      console.log(result);
                })
        .end();

      },


      'testing Monthly Plan for Spain': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=es")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "€ 15\npor mes");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Mexico': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=mx")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "MXN $ 1322\npor año");
                      console.log(result);
                })
        .end();

      },


      'testing Monthly Plan for Mexico': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=mx")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "MXN $ 257\npor año");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Malaysia': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=my")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "RM 620\nper year\n** Not inclusive of 6% GST");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Singapore': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=sg")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "$ 199\nper year");
                      console.log(result);
                })
        .end();

      },



      'testing Annual Plan for Indonesian': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=id")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "Rp 279,999\nsetiap tahun");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Thailand': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=th")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "฿ 449\nเดือนละ");
                      console.log(result);
                })
        .end();

      },


      'testing monthly Plan for Thailand': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=th")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "฿ 549\nเดือนละ");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Nigeria': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=ng")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "₦ 7,199\nper year");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Peru': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=pe")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "S/ 66\npor año");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for South Korea': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=kr")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "₩ 159,000\nper year");
                      console.log(result);
                })
        .end();

      },


      'testing monthly Plan for South Korea': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=kr")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "₩ 15,900\nper month");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Japan': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=jp")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "¥ 19,992\nper year");
                      console.log(result);
                })
        .end();

      },


      'testing monthly Plan for Japan': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=jp")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "¥ 1,990\nper month");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for Chile': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=cl")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "$ 16\npor mes\napprox. $10,745 CLP");
                      console.log(result);
                })
        .end();

      },


      'testing monthly Plan for Chile': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=cl")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "$ 20\npor mes\napprox. $13,430 CLP");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for South Africa': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=za")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "R 174\nper month");
                      console.log(result);
                })
        .end();

      },


      'testing monthly Plan for South Africa': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=za")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "R 194\nper month");
                      console.log(result);
                })
        .end();

      },


      'testing Annual Plan for New zealand': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=nz")
        .pause(6000)
        .waitForElementVisible(".pv-pricing .col-sm-6.col-md-6:nth-child(1)", 5000)
        .getText('.plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "NZD $ 199\nper year");
                      console.log(result);
                })
        .end();

      },


      'testing monthly Plan for New zealand': function (browser){
        browser
        .url("https://www.pagevamp.com/?desh=nz")
        .pause(6000)
        .getText('.pv-pricing .col-sm-6.col-md-6:nth-child(2) .plan-box__pricing', function (result) {
                      this.assert.equal(result.value, "NZD $ 20\nper month");
                      console.log(result);
                })
        .end();

      },


      'testing for Footer Business Spotlight, open spotlight page': function (browser) {
    	 browser
    		.url("https://www.pagevamp.com/")
    		.click(".pv-footer-list li:nth-child(6) a")	
    		.url(function (result) {
                this.assert.equal(result.value, "https://spotlight.pagevamp.com/");
            })

            .end();

    },


     'testing for Footer Contact, message box pop up': function (browser) {
    	browser
    		.url("https://www.pagevamp.com/")
    		.click("#contact-footer-link")	
    		.pause(1000)
     		.waitForElementVisible('.intercom-messenger-frame.intercom-messenger-frame-enter-done',3000)
            
            .end();
        },


      'testing for Contact on Our Support team has your back, message box popup.': function (browser) {
      browser
       .url("https://www.pagevamp.com/")
       .click("#contact-us-btn")  
       .pause(3000)
       .waitForElementVisible('.intercom-messenger-frame.intercom-messenger-frame-enter-done',3000)
            
            .end();
        },


          'testing for Footer Terms of Service, opens Privacy policy page': function (browser) {
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


         'testing for Footer Privacy Policy, opens privacy policy page': function (browser) {
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


         'testing for Footer Getting Started, opens getting started page.': function (browser) {
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





      'testing for Start for Free on Try it free for 14 days, continue with facebook popup': function (browser) {
           browser
             .url("https://www.pagevamp.com/")
             .click(".btn--lg.pv-continue") 
                  .waitForElementVisible("#pv-continue-modal", 9000)
               .getText('#continue-with-facebook', function (result) {                                                                                                                                                                                                              
                         this.assert.equal(result.value, "Continue with Facebook");
                       console.log(result);
                  })
                  .end();
              },



      'testing for Get Facebook on BUSINESS VALUE, Build my facebook page page opens.' :function (browser){
     browser
     .url("https://www.pagevamp.com/")
     .click(".pv-cnt.pv-cnt--fbpage a")
      .url(function (result) {
        this.assert.equal(result.value, "https://www.pagevamp.com/us/facebook-page-creation-service?lang=EN");
            })

            .end();
    },


      'testing view all for Demo Site1, opens demo site1.' :function(browser){
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--left a[data-url='https://jdespresso1.pagevamp.com']")
          .waitForElementVisible("#myModalLabel",3000)
          .getText('#iframe-business-name', function (result){
            this.assert.equal(result.value,"J&D Espresso");
            console.log(result);
          })
          .end();
      },



      'testing for Demo Site1 loader, loader should appear' :function(browser){
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--left a[data-url='https://jdespresso1.pagevamp.com']")
          .waitForElementVisible("#modal-iframe-url",3000);

          browser.expect.element('.pv-loading__overlay').to.have.css('display').which.equals('block');
          browser.end();
        },


        'testing for Demo Site1, Demo site 1 appear' :function(browser){    
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--left a[data-url='https://jdespresso1.pagevamp.com']")
          .getAttribute("#modal-iframe-url" , "src", function (result) {
            this.assert.equal(result.value, "https://jdespresso1.pagevamp.com/");
             })
          .waitForElementNotVisible('.pv-loading__overlay',7000)
          .end();
        },



      'testing view all for Demo Site2,demo site 2 should open' :function(browser){
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--right .view-iframe")
          .waitForElementVisible("#myModalLabel",1000)
          .getText('#iframe-business-name', function (result){
            this.assert.equal(result.value,"Glamour by Linda Radostová");
            console.log(result);
          })
          .end();
      },


      'testing for Demo Site2, Demo site 2 appear' :function(browser){    
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--right a[data-url='https://glamourbylr1.pagevamp.com']")
          .getAttribute("#modal-iframe-url" , "src", function (result) {
            this.assert.equal(result.value, "https://glamourbylr1.pagevamp.com/");
             })
          .waitForElementNotVisible('.pv-loading__overlay',8000)
          .end();
        },


      'testing view all for Demo Site3, demosite 3 should open' :function(browser){
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--left a[data-url='https://meetsocialgrill1.pagevamp.com']")
          .waitForElementVisible("#myModalLabel",3000)
               .getText('#iframe-business-name', function (result){
             this.assert.equal(result.value,"Meet Social Grill");
          })
          .end();
      },


      'testing for Demo Site3 , demo site 3 appear' :function(browser){    
        browser
          .url("https://www.pagevamp.com/")
          .click(".pv-showcase__cnt--left a[data-url='https://meetsocialgrill1.pagevamp.com']")
          .getAttribute("#modal-iframe-url" , "src", function (result) {
            this.assert.equal(result.value, "https://meetsocialgrill1.pagevamp.com/");
             })
          .waitForElementNotVisible('.pv-loading__overlay',8000)
          .end();
        },



      'testing for Spanish Language, page appear on spanish' :function (browser){
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


      'testing for Indonesian Language, page appear on indnesian' :function (browser){
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


      'testing for Italian Language, page appear on italian' :function (browser){
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


      'testing for Vietnamese Language, page appear on vietnamese' :function (browser){
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


      'testing for Thai Language, page appear on thai' :function (browser){
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

      'testing for cookie policy banner for Italian, cookie policy banner appear.' :function (browser){
          browser
            .url("https://www.pagevamp.com/?desh=it")
            .waitForElementVisible("  .pv-cookie ", 1000)
            .getText('.pv-cookie__alert', function(result){
              this.assert.equal(result.value.replace(/\s/g,''),"×Questositoutilizzacookieperilfunzionamentoelamiglioregestionedelsito.Icookietecniciedianalisistatisticasonogiastatiimpostati.Permaggioriinformazioni,consultalanostraCookiePolicy.Proseguendo,acconsentiall’utilizzodicookie.Accetto");
              console.log(result);
            })
            .end();
        },



    'testing for cookie policy banner for Spanish, cookie policy banner appear' :function (browser){                                                                                                                                                                                                                              
        browser
          .url("https://www.pagevamp.com/?desh=es")
          .waitForElementVisible("  .pv-cookie ", 1000)
          .getText('.pv-cookie__alert', function(result){
            this.assert.equal(result.value.replace(/\s/g,''),"×Alusarestesitiowebustedconsienteelusodecookies.Lascookiespuedenseradministradasenlaconfiguracióndesunavegadorwebodesudispositivo.Paramásinformación,porfavorrevisenuestraPolíticadecookies.");
            console.log(result);
          })
          .end();
      },



      'testing Distributore Italiano,Distributore Italiano appear  ' : function (browser) {
              browser
              .url("https://www.pagevamp.com/?desh=it")
              .waitForElementVisible(".pv-distributor",1000)
              .getText('.pv-distributor__title', function(result){
            this.assert.equal(result.value,"Distributore Italiano:");
            console.log(result);
          })
          .end();
                
            },

      'testing sediin logo, sediin logo appear' : function (browser) {
                browser
                .url("https://www.pagevamp.com/?desh=it")
                 browser.getAttribute(".pv-distributor img" , "src", function (result) {
                this.assert.equal(result.value, "https://www.pagevamp.com/images/logo-sediin.png");
                });
              browser.end();
      }



        }

 


    


    





