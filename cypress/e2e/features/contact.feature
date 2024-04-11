Feature: Test Contact Page Functionality
    Scenario: To send empty contact details
        Given User go to contact page
        When User click on send button
        Then Required field should shown error message


    Scenario:  To Fill Invalid Message
        Given User go to contact page
        When User fill invalid message less than 50 character as "test" at message fields and click send
        Then An error message should shown by invalid message


    Scenario:  To attach non-empty file
        Given User go to contact page
        When User attach a non-empty.txt as "nonemptyTestFile.txt" file and click send
        Then An error message should shown by invalid file

    Scenario: To send full contact details
        Given User logged in with valid email as "test12345@gmail.com" and password as "Test1234@@##" then go to contact page
        When User fill all fields as "<subjectIndex>" "<message>" "<fileName>"
        And User click on send button
        Then Successful message should appear

        Examples:
            | subjectIndex     | message                                                 | fileName          |
            | customer-service | Lorem ipsum dolor sit amet, consectetuer adipiscing eli | emptyTestFile.txt |

    @mobile
    Scenario: To send full contact details on mobile view
        Given User logged in with valid email as "test12345@gmail.com" and password as "Test1234@@##" then go to contact page
        When User fill all fields as "<subjectIndex>" "<message>" "<fileName>" on "mobile" view
        And User click on send button
        Then Successful message should appear

        Examples:
            | subjectIndex     | message                                                 | fileName          |
            | customer-service | Lorem ipsum dolor sit amet, consectetuer adipiscing eli | emptyTestFile.txt |

    @tablet
    Scenario: To send full contact details on tablet view
        Given User logged in with valid email as "test12345@gmail.com" and password as "Test1234@@##" then go to contact page
        When User fill all fields as "<subjectIndex>" "<message>" "<fileName>" on "tablet" view
        And User click on send button
        Then Successful message should appear

        Examples:
            | subjectIndex     | message                                                 | fileName          |
            | customer-service | Lorem ipsum dolor sit amet, consectetuer adipiscing eli | emptyTestFile.txt |


    @desktop
    Scenario: To send full contact details on desktop view
        Given User logged in with valid email as "test12345@gmail.com" and password as "Test1234@@##" then go to contact page
        When User fill all fields as "<subjectIndex>" "<message>" "<fileName>" on "desktop" view
        And User click on send button
        Then Successful message should appear

        Examples:
            | subjectIndex     | message                                                 | fileName          |
            | customer-service | Lorem ipsum dolor sit amet, consectetuer adipiscing eli | emptyTestFile.txt |