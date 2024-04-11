Feature: Test Homepage Filtering Functionality
    Scenario: Filtering data by Search bar using exist input data
        Given User open website at homepage
        When User Enter input data as "<query>" and click on search button
        Then Data items should be filtered as query "<query>"
        Examples:
            | query  |
            | Pliers |
            | Hammer |
            | Shock  |

    Scenario: Reset Filtering data by Search bar
        Given User open website at homepage
        When  User Enter input data as "Pliers" and click on search button
        And Click on reset search button
        Then Data Items should Reset search filtering


    Scenario: Filtering data by Search bar using non exist input data
        Given User open website at homepage
        When User Enter input data as "TestTest" and click on search button
        Then No result found message should shown and empty items list for "TestTest" query


    Scenario: Check if the checkbox is selectable or not and toggled
        Given User open website at homepage
        When User check or uncheck any number of boxes
        Then checkboxes are checked or unchecked

    Scenario: Check if the sub checkboxes is selectable when select the parent checkbox
        Given User open website at homepage
        When User check boxes by category name or brand name
        Then All sub checkboxes should checked


    Scenario: Filtering data using filters checkbox
        Given User open website at homepage
        When User check any box with index "<index>"
        Then Data items should filtered as checked query "<query>"

        Examples:
            | index | query  |
            | 1     | Hammer |
            | 5     | Pliers |


