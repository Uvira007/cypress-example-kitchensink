describe('Mouse actions', () => {
  
  beforeEach(() => {
    cy.visit('/commands/actions')
  })
  it('can click on sections of a canvas', () => {
    //cy.visit()
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(90, 90)
    
  })

  it('can double click on the button', () => {
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can hover over the menu to open navigation bar', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu').should('be.visible')
  })
})