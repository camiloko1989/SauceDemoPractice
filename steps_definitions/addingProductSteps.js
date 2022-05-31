const {login} = require("../pages/loginPage.js");
const {product} = require("../pages/loginPage.js");
const {cart} = require("../pages/cartPage.js");
const {checkout} = require("../pages/checkOutPage.js");
const {checkout2} = require("../pages/checkOutTwoPage.js");


const {I, loginPage, productPage, cartPage, checkOutPage, checkOutTwoPage} = inject();


Given('The user is on the product page', (email, password) =>{
    loginPage.validateLoginPage();
    loginPage.login("standard_user", "secret_sauce");
    productPage.validatePage();
})

When('the user selects the first item on the list', () =>{
    productPage.selectFirstProduct();
    productPage.addProductToCart();
})


When('the item is sent to the shopping cart', () =>{
    cartPage.validateCartPage();
    cartPage.validateItemsInCart();
})

When('the user removes the item from the shopping cart', () =>{
    cartPage.removeItem();
})


Then('the item is no longer in the shopping cart', () =>{
    cartPage.validateCartPage();
    cartPage.validateNoItemsinCart();
})

When('the user adds the first item to the shopping cart', () =>{
    productPage.selectFirstProduct();
    productPage.addProductToCart();
    cartPage.validateCartPage();
    cartPage.validateItemsInCart();
})

When('completes the process to buy the item', (firstName, lastName, zipCode) =>{
    cartPage.goToCheckout();
    checkOutPage.validateCheckOutPage();
    checkOutPage.fillForm("Camilo", "Garcia", "111311");
    checkOutTwoPage.validateCheckOutPageTwo();
    checkOutTwoPage.buyItem();
})

Then('the confirmation screen is displayed', () =>{
    checkOutTwoPage.validateCompleteBuy();
})