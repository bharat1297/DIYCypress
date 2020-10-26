

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

When("User will create account with the following information :", dataTable => {
    var hashTable = dataTable.rowsHash();
    cy.fillRegistrationForm(hashTable);

})
When("User should successfully register and directed to homepage", () => {

})



