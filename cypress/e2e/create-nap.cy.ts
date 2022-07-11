/// <reference types="cypress" />

export const createNapCy = describe('test', () => {
  beforeEach(() => {
    cy.visit('/create-new/nap')
  })

  it('should open disable db popup', () => {
    cy.get('.cy-disable-db').click()
    cy.get('.cy-disable-db-popup').should('be.visible')
  })

  it('should close disable db popup', () => {
    cy.get('.cy-disable-db').click()
    cy.get('.cy-close-db-popup').click()
  })
})
