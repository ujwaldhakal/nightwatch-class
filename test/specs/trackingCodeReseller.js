import mysql from 'mysql';
import mysqlProvider from '../services/mysql';

import user from '../services/deleteUser';
var reseller = new mysqlProvider();
var user2 = new user();

module.exports = { 
        'Testing if new user vamps from tracking code, user is assigned to that reseller':function(browser){
                    browser.url("https://pvdemo.com/?trk_code=4uS4DWn");
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
                      this.setValue('#email_container  input[type="text"]','rajeshwor.giri@gmail.com');
                      this.setValue(' input[id=pass]','raj66giri');
                      this.submitForm('label#loginbutton');   
                    });

                    browser.perform(async ()=> {
                      let otherReseller = await reseller.findReseller('rajeswhor.giri@gmail.com');
                      if(otherReseller.reseller_id !=210){
                        console.log('User is assigned to tracking code reseller:' + otherReseller.reseller_id);
                      }

                    }) 
                  browser.end();
                   
          }           
}




