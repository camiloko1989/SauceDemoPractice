const {I} = inject()

class ProductPage{

    constructor(){ //elements of the page
        this.productTitle = "//*[text()='Products']";
        this.firstProduct = "//*[@class='inventory_item_label'][1]";
        this.linkFirstProduct = "#item_4_title_link";
        this.addToCart = "#add-to-cart-sauce-labs-backpack";
        this.backTo = "#back-to-products";
        this.cart = "#shopping_cart_container";
        this.removeButton = "#remove-sauce-labs-backpack";
    }

    validatePage(){
        I.amOnPage("inventory.html");
        I.waitForElement(this.productTitle);
    }

    selectFirstProduct(){
        I.waitForElement(this.firstProduct);
        I.click(this.linkFirstProduct);
        I.waitForElement(this.backTo, 5);
        I.saveScreenshot("firstItem.png");
    }

    addProductToCart(){
        //I.waitForElement(this.backTo, 3);
        I.waitForElement(this.addToCart);
        I.click(this.addToCart);
        
    }

    /*validateCart(){
        I.waitForElement(this.cart);
        I.click(this.cart);
        I.amOnPage("cart.html");
        I.waitForElement(this.removeButton)
        I.saveScreenshot("itemAdded.png")
    }*/

}

module.exports = new ProductPage();
module.exports.ProductPage = ProductPage;