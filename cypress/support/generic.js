Cypress.Commands.add('enterText', (locator, data) => {
    cy.log(`User is entering the locator = ${locator} and data is equal to ${data}`);

    if (locator.includes('//')) {
        cy.xpath(locator, { timeout: 20000 }).should('exist').should('be.visible').type(data).highlight();
    } else {
        cy.get(locator, { timeout: 20000 }).should('exist').should('be.visible').type(data).highlight();
    }
});

Cypress.Commands.add('selectDropdown', (locator, data) => {
    cy.log(`User is selecting the locator = ${locator} and data is equal to ${data}`);

    if (locator.includes('//')) {
        cy.xpath(locator, { timeout: 20000 }).should('exist').should('be.visible').select(data).highlight();
    } else {
        cy.get(locator, { timeout: 20000 }).should('exist').should('be.visible').select(data).highlight();
    }
});

Cypress.Commands.add('selectRadio', (locator, data) => {
    cy.log(`User is selecting the radio locator = ${locator} and data is equal to ${data}`);

    if (locator.includes('//')) {
        cy.xpath(locator, { timeout: 20000 }).should('exist').should('be.visible').check().highlight();
    } else {
        cy.get(locator, { timeout: 20000 }).should('exist').should('be.visible').check().highlight();
    }
});


Cypress.Commands.add('checkbox', (locator, data) => {
    cy.log(`User is selecting the radio locator = ${locator} and data is equal to ${data}`);

    if (locator.includes('//')) {
        cy.xpath(locator, { timeout: 20000 }).should('exist').should('be.visible').check().highlight();
    } else {
        cy.get(locator, { timeout: 20000 }).should('exist').should('be.visible').check().highlight();
    }
});

Cypress.Commands.add('unCheckbox', (locator, data) => {
    cy.log(`User is selecting the radio locator = ${locator} and data is equal to ${data}`);

    if (locator.includes('//')) {
        cy.xpath(locator, { timeout: 20000 }).should('exist').should('be.visible').uncheck().highlight();
    } else {
        cy.get(locator, { timeout: 20000 }).should('exist').should('be.visible').uncheck().highlight();
    }
});

Cypress.Commands.add('highlight', { prevSubject: 'element' }, ($el) => {
    $el.css('border', '2px red solid');
});

Cypress.Commands.add('required', { prevSubject: "optional" }, (el) => {

    if (el) { el.should('not.be.empty') };
})

Cypress.Commands.add('clickAction', (locator) => {
    if (locator.includes('//')) {
        cy.xpath(locator).should('exist').should('be.visible').click();
    } else {
        cy.get(locator).should('exist').should('be.visible').click();
    }
})
