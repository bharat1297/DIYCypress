Feature: New User Registration

    Scenario: New User Registration
        Given User is on loginPage
        When User creates an account with email address "newuser007@test.com"
        Then User is redirected to the registration page
        And User will create account with the following information :
            | key            | value           |
            | title          | Mr.             |
            | firstName      | John            |
            | lastname       | Cena            |
            | password       | 12345           |
            | newsletter     | true            |
            | optin          | false           |
            | dob            | 1-January-2020  |
            | company        | CompanyName     |
            | address        | adressss line 1 |
            | city           | dallas          |
            | state          | California      |
            | postalCode     | 00000           |
            | Country        | United States   |
            | additionalInfo | Additional info |
            | homePhone      | 98765432        |
            | mobilePhone    | 2345677654      |
        Then User should successfully register and directed to homepage



