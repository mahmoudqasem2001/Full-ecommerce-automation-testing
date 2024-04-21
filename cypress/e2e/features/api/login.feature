Feature: Test login Api
    Scenario Outline: To login with invalid credentials
        Given The endpoint url to login page
        When Make POST request with body has "<email>" and "<password>"
        Then The api should return an error message saying "Unauthorized" and a status of "401"

        Examples:
            | email                       | password    |
            | mahmoudqasem543@gmail.com   | Ma12Kh34@@# |
            | mahmoudqasem54321@gmail.com | Ma12Kh34@@  |
            | mahmoudqasem54321@gmail.com | Ma12Kh34@@# |



    Scenario: To login with valid email and valid password
        Given The endpoint url to login page
        When Make POST request with body has "Test5@gmail.com" and "Test123#@"
        Then The api should return a response have token type "bearer" and expires_in "300" with status of "200"
