module.exports = {
    'Pagevamp Login ':function(browser){
        browser.url("https://pagevamp.com");
        browser.click(".navbar-right li:nth-child(5) a");
        browser.waitForElementVisible("#pv-login-modal",10000);
        browser.click("#login-pv-continue");
        browser.window_handles(function (result) {// 0 == current main window, 1 == new tab
            var newWindow = result.value[1];
            var currentWindow =result.value[0];
            this.switchWindow(newWindow);
            this.verify.urlContains('https://www.facebook.com/login.php');
            this.waitForElementVisible("#email_container",10000);
            this.setValue('#email_container  input[type="text"]',process.env.FACEBOOK_USERNAME);
            this.setValue(' input[id=pass]',process.env.FACEBOOK_PASSWORD);
            this.submitForm('label#loginbutton');
        });


        // Switch to main window
        browser.window_handles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[0];
            browser.switchWindow(handle);
            browser.pause(10000);

        });
        browser.end();


    }
}


