const {I} = inject()

class CheckOutPageTwo{

    constructor(){
        this.titleTwo = "//*[@class='title' and contains(text(), 'Overview')]";
        this.quantity = "//*[@class='cart_quantity']"
        this.finishButton = "#finish";
        this.cancelButton = "#cancel";
        this.successBuy = "//*[@class='complete-text']"
    }
    
    validateCheckOutPageTwo(){
        I.amOnPage("checkout-step-two.html");
        I.waitForElement(this.titleTwo, 4);
    }

   buyItem(){
       I.waitForElement(this.quantity);
       I.click(this.finishButton);
       
   }

   validateCompleteBuy(){
        I.amOnPage("checkout-complete.html");
        I.waitForElement(this.successBuy);
   }

   cancelBuy(){
       I.waitForElement(this.cancelButton);
       I.click(this.cancelButton);
   }
}

module.exports = new CheckOutPageTwo();
module.exports.CheckOutPageTwo = CheckOutPageTwo;


