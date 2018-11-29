import mysql from 'mysql';

module.exports = { 
        'Testing user Login': function(browser){
            
            let myPromise = function (){
             return new Promise(function(resolve, reject){
                    console.log("starting browser");
                    browser.url("https://www.pagevamp.com/");
                    browser.click(".navbar-right li:nth-child(5) a");
                    browser.waitForElementVisible("#pv-login-modal",1000);
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
                      this.switchWindow(currentWindow);
                      })  
                      setTimeout(() => resolve(1), 10000);
                    });
                        
            }    

            myPromise().then(function(fromResolve){
                console.log('connecting database');
                var connection =  mysql.createConnection({
                   host: 'mysql-stage',
                   user: 'gogo',
                   password: '$50kochappal',
                   database: 'staging'
                 })
            connection.connect();
               console.log("Reseller id");
               connection.query({
                       sql: 'SELECT `reseller_id` FROM `users` WHERE `email` = "ksm_tg7@yahoo.com"',
                       timeout: 40000, // 40s
               }, function (error, results, fields) {
                       console.log(results);
               })
               connection.end();

            }).catch(function(fromReject){
                console.log("it's from reject");
            })


        }
}   
