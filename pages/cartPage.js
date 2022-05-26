const {I} = inject()

class CartPage{

    constructor(){
        this.cartTitle = "//*[text()='Your Cart']";
        this.continueShopping = "#continue-shopping";
        this.removeButton = "#remove-sauce-labs-backpack";
        this.checkOut = "#checkout";
        this.itemsInCart = "//*[@class='shopping_cart_badge']"
    }

    validateCartPage(){
        I.amOnPage("cart.html");
        I.waitForElement(this.cartTitle);
    }

    validateItemsInCart(){
        I.waitForElement(this.itemsInCart);
        I.waitForElement(this.removeButton);
    }

    removeItem(){
        I.waitForElement(this.removeButton);
        I.click(this.removeButton);
        
    }

    validateNoItemsinCart(){
        I.dontSeeElement(this.itemsInCart);
    }
}

module.exports = new CartPage();
module.exports.CartPage = CartPage;