var locator = {
    firstNameTextBox: '//input[@id="customer_firstname"]',
    lastNameTextBox: '//input[@id="customer_lastname"]',
    passwordTextBox: '//input[@id="passwd"]',
    genderMaleRadio: '//input[@id="id_gender1"]',
    genderFemaleRadio: '//input[@id="id_gender2"]',
    dobDropdown: {
        days: '//select[@id="days"]',
        months: ' //select[@id="months"]',
        years: '//select[@id="years"]'
    },
    newsletterCheckbox: '//input[@id="newsletter  "]',  //@type="checkbox"| 
    optinCheckbox: '//input[ @id="optin"]',   //@type="checkbox",
    companyTextBox: '//input[@id="company"]',
    addressTextBox: '//input[@id="address1"]',
    address2TextBox: '//input[@id="address2"]',
    cityTextBox: '//input[@id="city"]',
    stateDropdown: '//select[@id="id_state"]',
    postalCodeTextBox: '//input[@id="postcode"]',
    countryDropdown: '//select[@id="id_country"]',
    additionalInfoTextArea: '//textarea[@id="other"]',
    homePhoneTextBox: '//input[@id="phone"]',
    mobileTextBox: '//input[@id="phone_mobile"]',
    aliasTextBox: '//input[@id="alias"]',
    registerBtn: '//button[@id="submitAccount"]',

}

Cypress.Commands.add("fillRegistrationForm", (hashTable) => {

    if (hashTable.title) {
        if (hashTable.title === "Mr.") {
            cy.selectRadio(locator.genderMaleRadio, hashTable.title)
        } else {
            cy.selectRadio(locator.genderFemaleRadio, hashTable.title)
        }
    }
    if (hashTable.firstName) {
        cy.enterText(locator.firstNameTextBox, hashTable.firstName);
    }
    if (hashTable.lastname) {
        cy.enterText(locator.lastNameTextBox, hashTable.lastname);
    }
    if (hashTable.password) {
        cy.enterText(locator.passwordTextBox, hashTable.password);
    }
    if (hashTable.newsletter) {
        if (hashTable.newsletter == "true") {
            cy.checkbox(locator.newsletterCheckbox, hashTable.newsletterCheckbox)
        } else {
            cy.unCheckbox(locator.newsletterCheckbox, hashTable.newsletterCheckbox)
        }
    }
    if (hashTable.optin) {
        if (hashTable.optin == "true") {
            cy.checkbox(locator.optinCheckbox, hashTable.optinCheckbox)
        } else {
            cy.unCheckbox(locator.optinCheckbox, hashTable.optinCheckbox)
        }
    }
    if (hashTable.dob) {
        if (hashTable.dob) {
            var dobData = hashTable.dob.split("-");
            cy.selectDropdown(locator.dobDropdown.days, dobData[0]);
            cy.selectDropdown(locator.dobDropdown.months, dobData[1]);
            cy.selectDropdown(locator.dobDropdown.years, dobData[2]);
        }

    }
    if (hashTable.address) {
        cy.enterText(locator.addressTextBox, hashTable.address);
    }
    if (hashTable.company) {
        cy.enterText(locator.companyTextBox, hashTable.company);
    }
    if (hashTable.city) {
        cy.enterText(locator.cityTextBox, hashTable.city);
    }
    if (hashTable.state) {
        cy.selectDropdown(locator.stateDropdown, hashTable.state);
    }
    if (hashTable.postalCode) {
        cy.enterText(locator.postalCodeTextBox, hashTable.postalCode);
    }
    if (hashTable.additionalInfo) {
        cy.enterText(locator.additionalInfoTextArea, hashTable.additionalInfo);
    }
    if (hashTable.homePhone) {
        cy.enterText(locator.homePhoneTextBox, hashTable.homePhone);
    }
    if (hashTable.mobilePhone) {
        cy.enterText(locator.mobileTextBox, hashTable.mobilePhone);
    }

    cy.clickAction(locator.registerBtn)

})
