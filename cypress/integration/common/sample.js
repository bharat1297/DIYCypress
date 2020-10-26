
describe("abc", () => {

    let env;
    before(() => {
        env1 = Cypress.env();
    })

    it("xyz", () => {
        cy.request({
            url: 'www.google.com',
            qs: {}
        })

    })
})

