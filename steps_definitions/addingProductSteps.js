const {login} = require("../pages/loginPage.js");
const {product} = require("../pages/productPage.js");

const {I, loginPage, productPage} = inject();

Given('I am on the product page', (email, password) =>{

    loginPage.validateLoginPage();
    loginPage.login("standard_user", "secret_sauce");
    productPage.validatePage();

})

When('I select the first item from the list', () => {

    productPage.selectFirstProduct();
    productPage.addProductToCart();

})

Then('the item is sent to the shopping cart', () => {
    productPage.validateCart();
})