Feature: Login

    Scenario: Log in using invalid credientials
        Given User is on the login page
        When User logs in using "name@test.com" and "password"
        Then User should get a error alert


    Scenario: Logging in using correct credentials email address and password
        Given User is on the login page
        When User logs in using "username@test.com" and "password"
        Then User is logged in successfully and redirected to the homepage



