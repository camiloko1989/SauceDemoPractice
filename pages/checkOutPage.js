const {I} = inject()

class CheckOutPage{

    constructor(){
        this.checkOutTitle = "//*[@class='title' and contains(text(), 'Information')]";
        this.firstName = "#first-name";
        this.lastName = "#last-name";
        this.zipCode = "#postal-code";
        this.continueButton = "#continue";
        this.cancelButton = "#cancel";
    }
    
    validateCheckOutPage(){
        I.amOnPage("checkout-step-one.html");
        I.waitForElement(this.checkOutTitle);
    }

    fillForm(firstName, lastName, zipCode){
        I.fillField(this.firstName, firstName);
        I.fillField(this.lastName, lastName);
        I.fillField(this.zipCode, zipCode);
        I.click(this.continueButton);
    }


}

module.exports = new CheckOutPage();
module.exports.CheckOutPage = CheckOutPage;