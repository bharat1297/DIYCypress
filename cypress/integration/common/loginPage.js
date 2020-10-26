import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User is on loginPage', () => {
    cy.loginPage();
});

When('I input {string} in Create Account field', (email) => {
    cy.enterEmail(email);
});


When("User creates an account with email address {string}", (emailAddress) => {
    cy.createAccount(emailAddress);
    cy.required()
})

Then("User is redirected to the registration page", () => {
})

Given('I am on the homepage', () => {
    cy.homePage();
});

When('I click on the Sign In button', () => {
    cy.get('.header_user_info').click();
});
Then('I should be redirected to the login page with the {string} term', (term) => {
    cy.get('.page-heading').contains(term);
});