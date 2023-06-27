const navbarText = Cypress.env('navbarText')
context('MyfirstTest', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    // it('Check if header exist',() =>{
    //     cy.get('h1').should('exist')
        
    // })
    // it('check if header has the right value', () => {
    //     cy.get('h1').should('contain.text', 'Actions')
    // })
    // it('check if paragraph exist in header h1', () =>{
    //     cy.get('.container').eq(1).find('p').should('exist')
    // })
    // it('check with in a container for elements', () =>{
    //     cy.get('.container').eq(2).within(() => {
    //         cy.get('h4').should('exist')
    //         cy.get('p').should('exist')
    //     })
    // })
    
    it('check for the text cypress io website link', () => {
        cy.findByText(navbarText).should('exist')
        cy.findByText(navbarText).click()
    })
})