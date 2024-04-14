Feature: Test The Login Functionality

  Scenario Outline: To login with invalid credentials
    Given User open the website and go to login page
    When User fill email as "<email>" and "<password>" and click on login
    Then Error message should appear

    Examples:
      | email                       | password    |
      | mahmoudqasem543@gmail.com   | Ma12Kh34@@# |
      | mahmoudqasem54321@gmail.com | Ma12Kh34@@  |
      | mahmoudqasem54321@gmail.com | Ma12Kh34@@# |

  Scenario: To login with valid email and valid password
    Given User open the website and go to login page
    When User fill email as "test12345@gmail.com" and "Test1234##@@" and click on login
    Then User should navigate to home page


  @mobile
  Scenario Outline: Test login page functionality in mobile view
    Given User open the website and go to login page
    When User fill email as "<email>" and "<password>" and click on login
    Then Error message should appear in "mobile" view

    Examples:
      | email                     | password    |
      | mahmoudqasem543@gmail.com | Ma12Kh34@@# |


  @tablet
  Scenario Outline: Test login page functionality in tablet view
    Given User open the website and go to login page
    When User fill email as "<email>" and "<password>" and click on login
    Then Error message should appear in "tablet" view

    Examples:
      | email                       | password    |
      | mahmoudqasem54321@gmail.com | Ma12Kh34@@# |

  @desktop
  Scenario Outline: Test login page functionality in desktop view
    Given User open the website and go to login page
    When User fill email as "<email>" and "<password>" and click on login
    Then Error message should appear in "desktop" view


    Examples:
      | email                     | password    |
      | mahmoudqasem543@gmail.com | Ma12Kh34@@# |
