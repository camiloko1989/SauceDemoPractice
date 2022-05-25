const {I} = inject()

class LoginPage{

    constructor(){
        this.loginLogo = "//*[@class='login_logo']";
        this.inputUsername = "#user-name";
        this.inputPassword = "#password";
        this.buttonSubmit = "#login-button";
        this.lockedWarning = "//*[contains(text(), 'locked')]";
        this.wrongWarning = "//*[contains(text(), 'do not match')]";

    }

    validateLoginPage() {
        I.amOnPage("");
        I.waitForElement(this.loginLogo);
        I.waitForElement(this.inputUsername);
        I.waitForElement(this.inputPassword);
    }

    login(username, password){
        I.fillField(this.inputUsername, username);
        I.fillField(this.inputPassword, password);
        I.click(this.buttonSubmit);
    }

    validateLoginSuccess(){
        I.waitForElement("//*[text()='Products']", 3)
        I.saveScreenshot("loginSuccessful.png");
    }

    validateLockedUser(){
        I.waitForElement(this.lockedWarning), 3;
        I.saveScreenshot("loginLocked.png");
    }

    validateWrongPass(){
        I.waitForElement(this.wrongWarning, 3);
        I.saveScreenshot("loginWrong.png");
    }

}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;