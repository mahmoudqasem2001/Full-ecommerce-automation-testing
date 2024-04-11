Feature: Test Cart Page

    Scenario: Check cart with many items and empty cart
        Given User Logged in with email as "test@gmail.com" and password as "Test123@@##"
        When Go to cart page
        And Check cart is empty
        And Add "3" products to cart and check if added on cart page
        Then Products added should shown on cart page


    Scenario: Check delete cart button functionality
        Given User Logged in with email as "test@gmail.com" and password as "Test123@@##"
        When User add item "Combination Pliers" to cart
        And Go to cart page
        And User click on delete item "Combination Pliers" button
        Then item "Combination Pliers" should be deleted from the cart and cart count should decrease

