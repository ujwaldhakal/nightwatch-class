'use strict'
import mysqlProvider from "../services/mysql"

module.exports = { 
    'Checking Login' : function (browser) {
        browser.url("https://www.pagevamp.com")
            .click(".navbar-right li:nth-child(5) a")
            .waitForElementVisible("#pv-login-modal",1000)
            .click("#login-pv-continue");
            browser.window_handles(function (result) {// 0 == current main window, 1 == new tab
                var newWindow = result.value[1];
                var currentWindow =result.value[0];
                this.switchWindow(newWindow);
                this.verify.urlContains('https://www.facebook.com/login.php');
                this.waitForElementVisible("#email_container",5000);
                this.setValue('#email_container  input[type="text"]','ksm_tg27@yahoo.com');
                this.setValue(' input[id=pass]','goleksm6260');
                this.submitForm('label#loginbutton',function(result){
                     this.switchWindow(currentWindow);
                     this.verify.urlContains('https://www.pagevamp.com/');
                     this.waitForElementVisible("#wrap .logo-brand--vampFlow",13000);
                });  
            });
            var defaultResellerId = 210;
            var dbResellerId;

            Constructor() {
                this.mysql = new mysqlProvider;
            }
            dbResellerId.findOneByColumn();





            browser.end();
    }   
    //  'Testing Pagevamp logo' : function (browser) {
    //     browser
    //     .url("https://www.pagevamp.com/")
    //     .click(".pv-showcase__cnt--left a[data-url='https://meetsocialgrill1.pagevamp.com']")
    //     // .getText("#myModalLabel strong#iframe-business-name" , function(result){
    //     //         this.assert.equal(result.value.replace('/s/\g',"Meet Social Grill")
    //     // })
    //     .end();
    // }


    // 'Testing Pagevamp logo' : function (browser) {
    //     browser
    //     .url("https://www.pagevamp.com/")
    //     .waitForElementVisible("#topmost-nav a.pv-logo",1000)
    //     .click("#topmost-nav a.pv-logo")
    //     .url(function(result) {
    //             this.assert.equal(result.value, "https://www.pagevamp.com/");  
    //         })
    //     .pause(3000)
    //     .end();
    // },

    // 'Testing if "How it works" is working' : function (browser) {
    //     browser
    //     .url("https://www.pagevamp.com/")
    //     .click(".navbar-right li:nth-child(1) a")
    //     .url(function(result) {
    //             this.assert.equal(result.value, "https://www.pagevamp.com/#how-it-works");   //scroll to How it work section
    //             this.assert.containsText("#how-it-works-section","Website in seconds");     //testing "Website in seconds" text
    //             this.getAttribute("#how-it-works-video iframe", "src",function(result){
    //                     this.assert.equal(result.value,"https://www.youtube.com/embed/09Y0Xz_bTpM?enablejsapi=1");
    //             });
    //         })
    //     .pause(3000)
    //     .end();
    // },

    
    // 'Testing if pricing tab works properly': function (browser) {    
    //     browser.url("https://www.pagevamp.com/")
    //         .click(".navbar-right li:nth-child(2) a")
    //         .url(function (result) {
    //             this.assert.equal(result.value, "https://www.pagevamp.com/us/pricing");  //Pricing page url
    //             })
    //         .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
    //         .assert.containsText(".pv-title","Pricing")            // testing if page contains "Pricing" text      
    //  },

    //  'Testing if Partners link works': function (browser) {    
    //     browser.url("https://www.pagevamp.com/")
    //         .click(".navbar-right li:nth-child(3) a")
    //         .assert.urlEquals('https://reseller.pagevamp.com/')
    //         .getText(".pv-banner h1" , function(result){
    //             this.assert.equal(result.value,"Pagevamp Reseller Program")
    //         })
    //         .end();
    // },


    // 'Testing if Features tab works properly': function (browser) {    
    //     browser.url("https://www.pagevamp.com/")
    //         .click(".navbar-right li:nth-child(4) a")
    //         .url(function (result) {
    //             this.assert.equal(result.value, "https://www.pagevamp.com/us/features");  //Feature page url
    //             })
    //         .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
    //         .assert.containsText(".pv-title","Pagevamp Features")     // testing if feature page header text     
    //         .end();
    //  },

    // 'Testing Login modal popup': function (browser) {    
    //     browser.url("https://www.pagevamp.com/")
    //         .click(".navbar-right li:nth-child(5) a")
    //         .waitForElementVisible("#pv-login-modal",1000)
    //         .getText("#login-pv-continue", function(result){
    //             this.assert.equal(result.value,"Log in with Facebook")
    //         })
    //         .end();
    //  },

    // 'Testing Get Pagevamp modal popup': function (browser) {    
    //     browser.url("https://www.pagevamp.com/")
    //         .click(".navbar-right li:nth-child(6) a")
    //         .waitForElementVisible("#pv-continue-modal",1000)
    //         .getText("#login-fb", function(result){
    //             this.assert.equal(result.value,"Continue with Facebook")
    //         })
    //          .end();
    //  },

    // 'Testing if Language dropdown is working': function (browser) {    
    //     browser.url("https://www.pagevamp.com/");
    //     browser.click(".navbar-right li:nth-child(7) a");
    //     browser.click(".dropdown-toggle", function(response){    
    //             browser.assert.visible(".dropdown-menu")      //checking dropdown toggle
    //                    .assert.containsText(".dropdown-menu", "Spanish")  //checking dropdown menu items
    //                    .assert.containsText(".dropdown-menu", "Indonesian")
    //                    .assert.containsText(".dropdown-menu", "Italian")
    //                    .assert.containsText(".dropdown-menu", "Vietnamese")
    //                    .assert.containsText(".dropdown-menu", "Thai");
    //             }) 
    //     browser.click(".dropdown-menu-right a[href='?lang=ES']");
    //     browser.getText(".pv-banner--static h1.pv-title" , function(result){
    //                     this.assert.equal(result.value,"Obtenga más clientes con un hermoso sitio web. Déjanos construirle uno en segundos.")
    //                    })
    //     browser.click(".dropdown-menu-right a[href='?lang=ID']");
    //     browser.waitForElementVisible(".pv-banner--static h1.pv-title",2000);
    //     browser.getText(".pv-banner--static h1.pv-title" , function(result){
    //                     this.assert.equal(result.value,"Dapatkan pelanggan lebih banyak dengan website yang indah. Biarkan kami membuatkannya untuk anda dalam sekejap.")
    //                    })
    //     browser.end();
    //  },

    // 'Testing if Start for Free button in bannder opens "Continue with Facebook" popup':function(browser){
    //         browser.url("https://www.pagevamp.com")
    //         .click(".pv-banner__cnt a.pv-continue")
    //         .waitForElementVisible("#pv-continue-modal",1000)
    //         .getText("#login-fb", function(result){
    //             this.assert.equal(result.value,"Continue with Facebook")
    //         })
    //          .end();
    //  }

    // 'Testing "Get Facebook" link in Business Value opens Facebook page create service page':function(browser){
    //         browser.url("https://www.pagevamp.com")
    //                .click(".pv-grow-business article a.link")
    //                .assert.urlEquals("https://www.pagevamp.com/us/facebook-page-creation-service?lang=EN")
    //                .end();
    // },

    // 'Testing "View all features" link  opens Feature page':function(browser){
    //         browser.url('https://www.pagevamp.com')
    //                .click(".pv-features a.link")
    //                .url(function (result) {
    //                     this.assert.equal(result.value, "https://www.pagevamp.com/us/features");  //Feature page url
    //                  })
    //                .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
    //                .assert.containsText(".pv-title","Pagevamp Features")     // testing if feature page header text     
    //         .end();

    // },
    // 'Testing "Become a Partner" opens Reseller landing page':function(browser){
    //         browser.url("https://www.pagevamp.com");
    //         browser.click(".pv-partners a.link")
    //                .assert.urlEquals('https://reseller.pagevamp.com/')
    //                .end();
    // },

    // 'Testing if "Start for Free" in Try section opens "Continue with Facebook" popup':function(browser){
    //         browser.url("https://www.pagevamp.com/")
    //         .click(".pv-try .pv-block-divide__right a.pv-continue")
    //         .waitForElementVisible("#pv-continue-modal",2000)
    //         .getText("#login-fb", function(result){
    //             this.assert.equal(result.value,"Continue with Facebook")
    //         })
    //          .end();
    // },

    // 'Testing "See pricing details" link opens Pricing page':function(browser){
    //         browser.url('https://www.pagevamp.com');
    //         browser.click('.pv-pricing a.link')
    //                .url(function (result) {
    //                     this.assert.equal(result.value, "https://www.pagevamp.com/us/pricing");  
    //                 })
    //                 .waitForElementVisible(".pv-section--center .col-sm-12 .pv-title", 1000)
    //                 .assert.containsText(".pv-title","Pricing")           
    //                 .end();
    // },

    // 'Testing "Get Pagevamp" in plan box opens Continue with Facebook modal':function(browser){
    //         browser.url('https://www.pagevamp.com');
    //         browser.click('.pv-pricing .plan-box a.pv-continue')
    //                .waitForElementVisible("#pv-continue-modal",2000)
    //         .getText("#login-fb", function(result){
    //             this.assert.equal(result.value,"Continue with Facebook")
    //         })
    //          .end();
    // },

    // 'Testing "About" link in footer opens About page' : function (browser) {
    //     browser.url("https://www.pagevamp.com/")
    //           .click(".pv-footer ul.pv-footer-list li:nth-child(1) a")
    //           .url(function(result) {
    //             this.assert.equal(result.value, "https://www.pagevamp.com/us/about");   
    //             this.getText(".pv-section--center .col-sm-12 .pv-title",function(result){
    //                     this.assert.equal(result.value,"About Us");
    //             });
    //         })
    //     .end();
    //  },

    // 'Testing "Feature" link in footer opens Feature page' : function (browser) {
    //     browser.url("https://www.pagevamp.com/")
    //           .click(".pv-footer ul.pv-footer-list li:nth-child(2) a")
    //           .url(function(result) {
    //             this.assert.equal(result.value, "https://www.pagevamp.com/us/features");   
    //             this.getText(".pv-section--center .col-sm-12 .pv-title",function(result){
    //                     this.assert.equal(result.value,"Pagevamp Features");
    //             });
    //         })
    //     .end();
    // }, 
    // 'Testing "Career" link in footer opens Career page' : function (browser) {
    //     browser.url("https://www.pagevamp.com/")
    //           .click(".pv-footer ul.pv-footer-list li:nth-child(3) a")
    //           .window_handles(function(result) {
    //                     var handle = result.value[0];
    //                     browser.switchWindow(handle);
    //                  browser.assert.urlEquals('https://angel.co/pagevamp');
    //             });
    //     browser.end();
    // }, 
   
}    
