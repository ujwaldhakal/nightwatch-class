import mysql from 'mysql';
import mysqlProvider from '../services/mysql';

import axios from 'axios';
var reseller = new mysqlProvider();

module.exports = { 
        'Testing Reseller Assignment':function(browser){
                    browser.url("http://home.pagevamp.pv/");
                    browser.click(".navbar-right li:nth-child(5) a");
                    browser.waitForElementVisible("#pv-login-modal",10000);
                    browser.click("#login-pv-continue");
                    browser.window_handles(function (result) {// 0 == current main window, 1 == new tab
                      console.log("login window");
                      var newWindow = result.value[1];
                      var currentWindow =result.value[0];
                      this.switchWindow(newWindow);
                      this.verify.urlContains('https://www.facebook.com/login.php');
                      this.waitForElementVisible("#email_container",5000);
                      this.setValue('#email_container  input[type="text"]','ksm_tg27@yahoo.com');
                      this.setValue(' input[id=pass]','goleksm6260');
                      this.submitForm('label#loginbutton');   

                    });

                    browser.perform(function(done){
                    reseller.runQuery();
                     done(); 
                  })     
          }           
}


