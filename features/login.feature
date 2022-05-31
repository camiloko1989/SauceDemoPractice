Feature: Loggin into the page

Scenario: Loggin into the app with valid credentials

Given The user is on the main page
When The user fills the form with valid Username and valid Password
Then The product page is displayed

Scenario: Loggin into the app with locked user

Given The user is on the main page
When The user fills the form with locked Username and valid Password
Then The user sees a locked warning messsage

Scenario: Loggin into the app with wrong password

Given The user is on the main page
When The user fills the form with valid Username and wrong Password
Then The user sees a wrong warning messsage