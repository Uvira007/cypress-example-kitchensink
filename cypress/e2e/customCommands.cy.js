describe('Testing custom commands', () => {
  const tokenValue = 'abc123'
 
  it('sets and gets the value from the local storage', () =>{
    cy.setLocalStorage('token',tokenValue)
    cy.getLocalStorage('token').should('eq', tokenValue)
  })

  it('Modifies type command to log the sensisitve info as asterisks',()=> {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@gmail.com',{sensitive:true})
    cy.findByPlaceholderText('Email').type('blabla@gmail.com')
    
  })
})