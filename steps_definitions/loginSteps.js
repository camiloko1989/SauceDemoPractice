const {login} = require("../pages/loginPage.js");

const {I, loginPage} = inject();

Given('The user is on the main page', ()=>{

    loginPage.validateLoginPage();

});

When('The user fills the form with valid Username and valid Password', (email, password)=>{

    loginPage.login("standard_user", "secret_sauce");

})

Then('The product page is displayed', ()=>{

    loginPage.validateLoginSuccess();

})

When('The user fills the form with locked Username and valid Password', (email, password) =>{

    loginPage.login("locked_out_user", "secret_sauce")

})

Then('The user sees a locked warning messsage', () =>{

    loginPage.validateLockedUser()

})

When('The user fills the form with valid Username and wrong Password', (email, password) =>{

    loginPage.login("standard_user", "wrongPass")

})

Then('The user sees a wrong warning messsage', () =>{

    loginPage.validateWrongPass()

})