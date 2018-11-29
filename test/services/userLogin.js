class Login {
    newUserLogin(browser){
    	let myPromise = new Promise(function(resolve, reject){
                var err = false
                if(!err){
                    console.log('pass');
                    browser.url("https://www.pagevamp.com/");
                browser.click(".navbar-right li:nth-child(5) a");
                browser.waitForElementVisible("#pv-login-modal",1000);
                browser.click("#login-pv-continue");
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
                    console.log('pass2');
                    resolve(); 
                }else{
                    console.log("error");
                
                        reject();
                }
            })
 				
                
            }
}
export default Login
