
import mysql from 'mysql';
import mysqlprovider from '../services/mysql';
var  a = new mysqlprovider();

module.exports = { 
    'Checking that when user vamps, user is assigned to default Reseller' : function (browser) {
        browser.url("http://www.pagevamp.com/")
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
                this.submitForm('label#loginbutton');
                this.switchWindow(currentWindow);
                this.waitForElementVisible("#wrap .logo-brand--vampFlow",13000);
        });
        browser.end();
       
        setTimeout(function(){
            a.findResellerId();
        },30000);
    }
}
module.exports = { 
        'Checking that when user vamps from tracking code, user is assigned to that Reseller' : function (browser) {
        browser.url("http://www.pagevamp.com/?trk_code=2o8t6WO")
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
                this.submitForm('label#loginbutton');
                this.switchWindow(currentWindow);
                this.waitForElementVisible("#wrap .logo-brand--vampFlow",13000);
        });
        browser.end();
        
         setTimeout(function(){
            a.findResellerId();
        },30000);
    }
}
