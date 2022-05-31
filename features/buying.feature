Feature: Buying products 

Background: 
    Given The user is on the product page


Scenario: Add an item to the shopping cart
    When the user selects the first item on the list
    Then the item is sent to the shopping cart

Scenario: Remove an item from the shopping cart
    When the user selects the first item on the list
    And the item is sent to the shopping cart
    And the user removes the item from the shopping cart
    Then the item is no longer in the shopping cart

Scenario: Buy an item
    When the user adds the first item to the shopping cart
    And completes the process to buy the item
    Then the confirmation screen is displayed