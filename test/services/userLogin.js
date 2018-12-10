
class UserLogin {
    startBrowser(browser, url){
    	 this.browser = browser;  
        browser.url(url);
        browser.waitForElementVisible('body', 15000);
        console.log("browser opened");           
    
      
      
    }

}
export default UserLogin
