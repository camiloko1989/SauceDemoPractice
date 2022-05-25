Feature: Buying products from Product Page

Scenario: Add a pack to the shopping cart

Given I am on the product page
When I select the first item from the list
Then the item is sent to the shopping cart