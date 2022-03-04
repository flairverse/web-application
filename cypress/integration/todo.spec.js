/// <reference types="cypress" />

describe('test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9999')
  })

  it('should find nine list items in document', () => {
    cy.get('.theLI').should('have.length', 9)
  })
})
