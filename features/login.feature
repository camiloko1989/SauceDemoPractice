Feature: Loggin into the page

Scenario: Loggin into the app with valid credentials

Given Im on the main page
When I fill the form with valid Username and valid Password
Then I see the Product Page

Scenario: Loggin into the app with locked user

Given Im on the main page
When I fill the form with locked Username and valid Password
Then I see a locked warning messsage

Scenario: Loggin into the app with wrong password

Given Im on the main page
When I fill the form with valid Username and wrong Password
Then I see a wrong warning messsage