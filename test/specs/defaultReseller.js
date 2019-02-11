mport mysql from 'mysql';
import mysqlProvider from '../services/mysql';

import user from '../services/deleteUser';
var reseller = new mysqlProvider();
var user2 = new user();

module.exports = { 
        'Testing if new user vamps from pagevamp landing page, user is assigned to country default Reseller':function(browser){
                    browser.url("https://pvdemo.com");
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
                      let defaultReseller = await reseller.findReseller('rajeshwor.giri@gmail.com');
                      if(defaultReseller.reseller_id==210){
                        console.log('PASS: User is assigned to default reseller:' + defaultReseller.reseller_id);
                        user2.deleteUser();
                        browser.end();
                      }else{
                        console.log('FAIL : User is assigned to different reseller:' + defaultReseller.reseller_id);
                        user2.deleteUser();
                        browser.end();
                      }
                      
                   }) 
                  


          }           
}



