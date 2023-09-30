describe('register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1200, 1200);
  })
  it('register test', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
    cy.get('[data-test="registerLink"]').contains("Don't have an account? Sign Up").click({force: true})
    cy.url().should('include', '/register')
    cy.get('[data-test="registerHeader"]').contains("Register").should('be.visible')
    cy.get('[data-test="userName"]').should('be.visible').type("asptest2")
    cy.get('[data-test="firstName"]').should('be.visible').type("asp2")
    cy.get('[data-test="lastName"]').should('be.visible').type("test2")
    cy.get('[data-test="email"]').should('be.visible').type("asptest2@gmaail.com")
    cy.get('[data-test="password"]').should('be.visible').type("Clarusway1.")
    cy.get('[data-test="password2"]').should('be.visible').type("Clarusway1.")
    cy.get('[data-test="submitRegister"]').should('be.visible').click({force: true})
    cy.url().should('include', '/stocks')
    


  })

})