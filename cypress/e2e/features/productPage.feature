Feature: Test Product Page Functionality
    Scenario: To add product into cart
        Given User open the website and go to product page
        When User choose number of items and click on add to cart button
        Then Successful adding item alert should shown

    Scenario: To check out of stock product adding to cart
        Given User open the website and go to out of stock product page
        When User trying click on increase, decrease, add to cart buttons still disabled 



    Scenario: To Increase quantity
        Given User open the website and go to product page
        When check the default quantity equal to one
        And  User clicks on increase quantity button
        Then quantity number should have increased to two

    Scenario: To decrease quantity
        Given User open the website and go to product page
        When check the default quantity equal to one
        And User clicks on increase quantity button
        And  check the quantity equal to two
        When User clicks on decrease quantity button
        Then quantity number should have decreased to one

    Scenario: To add product into favorites with unauthorized user
        Given User open the website and go to product page
        When User clicks on add to favorites button
        Then error alert should shown


    Scenario: To add product into favorites which not added before with authorized user
        Given User has logged in with email as "test123@gmail.com" and password as "Test123@@" and go to product page
        When User clicks on add to favorites button
        Then Successful adding item alert should shown


    Scenario: To add product into favorites thats already exist in favorite with authorized user
        Given User has logged in with email as "test123@gmail.com" and password as "Test123@@" and go to product page
        When User clicks on add to favorites button
        Then  warning alert should shown that item already exist in favorites


