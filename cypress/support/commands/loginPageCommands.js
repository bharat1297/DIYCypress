var loginPageLocator = {
    emailAddressCreateTextBox: '#email_create',
    createAccountBtn: '//button[@id="SubmitCreate"]',
    emailAddressTextBox: '//input[@id="email"]',
    passwordTextBox: '//input[@id="passwd"]',
    signInBtn: '//button[@id="SubmitLogin"]'

};

var urls = {
    homePage: 'http://automationpractice.com/index.php',
    loginPage: 'http://automationpractice.com/index.php?controller=authentication&back=my-account'
};

Cypress.Commands.add('homePage', () => {
    cy.visit(urls.homePage);
});

Cypress.Commands.add('loginPage', () => {
    cy.visit(urls.loginPage);
});

Cypress.Commands.add('enterEmail', (emailAddress) => {
    cy.enterText(loginPageLocator.emailAddressCreateTextBox, emailAddress);
});

Cypress.Commands.add('createAccount', (emailAddress) => {
    cy.enterText(loginPageLocator.emailAddressCreateTextBox, emailAddress);
    cy.clickAction(loginPageLocator.createAccountBtn)

});
// Cypress.Commands.add('signIn', (emailAddress, password) => {
//     cy.enterEmail(homePageLocator.emailAddressTextBox, emailAddress)
// })
