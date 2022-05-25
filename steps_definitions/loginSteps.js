const {login} = require("../pages/loginPage.js");

const {I, loginPage} = inject();

Given('Im on the main page', ()=>{

    loginPage.validateLoginPage();

});

When('I fill the form with valid Username and valid Password', (email, password)=>{

    loginPage.login("standard_user", "secret_sauce");

})

Then('I see the Product Page', ()=>{

    loginPage.validateLoginSuccess();

})

When('I fill the form with locked Username and valid Password', (email, password) =>{

    loginPage.login("locked_out_user", "secret_sauce")

})

Then('I see a locked warning messsage', () =>{

    loginPage.validateLockedUser()

})

When('I fill the form with valid Username and wrong Password', (email, password) =>{

    loginPage.login("standard_user", "wrongPass")

})

Then('I see a wrong warning messsage', () =>{

    loginPage.validateWrongPass()

})