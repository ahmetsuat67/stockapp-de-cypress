describe('firms', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1200, 1200);
    })
    it('firms test', () => {
       cy.login()
       cy.get("[data-test='titleFirms']").contains("Firms").should("be.visible").click({ force: true });
       cy.get("[data-test='firmsHeader']").contains("Firms").should("be.visible");
       cy.get("[data-test='firmsBtn']").contains("New Firm").click({ force: true });
       cy.get("[data-test='firmName']").contains("Firm Name").click({ force: true }).type("Test Firm");
       cy.get("[data-test='firmAddress']").contains("Address").click({ force: true }).type("Test Address");
       cy.get("[data-test='firmPhone']").contains("Phone").click({ force: true }).type("1234567890");
       cy.get("[data-test='firmImage']").contains("Image").click({ force: true }).type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
       cy.get("[data-test='firmsSbmt']").should("be.visible").click({ force: true });
       cy.get("[data-test='firmCardName']").should("be.visible");
       cy.get("[data-test='firmCardImage']").should("be.visible");
       cy.get("[data-test='firmCardPhone']").should("be.visible");
       cy.get("[data-test='editBtn']").should("be.visible").first().click({ force: true });
       cy.get("input[name='name']").clear().type("Test Firm Edited");
       cy.get("input[name='address']").clear().type("Test Address Edited");
       cy.get("input[name='phone']").clear().type("1234567891");
       cy.get("input[name='image']").clear().type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
       cy.get("[data-test='firmsSbmt']").should("be.visible").click({ force: true });
       cy.get("[data-test='deleteBtn']").should("be.visible").first().click({ force: true });

      
    





    })

})