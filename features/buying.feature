Feature: Buying products from Product Page

Scenario: Add an item to the shopping cart

Given I am on the product page
When I select the first item from the list
Then the item is sent to the shopping cart

Scenario: Remove an item from the shopping cart

Given I am on the product page
Given I select the first item from the list
Given the item is sent to the shopping cart 
When I remove the item from the shopping cart
Then The item is no longer in the shopping cart