describe('AnnotationsCheck', () => {
  // before(() => {
  //   cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  // })
  // beforeEach(() => {
  //   cy.visit('/')
  // })
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  beforeEach(() => {
    cy.fixture('example').then(function(data){
      this.data = data
    })
  })

  it('Test the fixtures for network intercept',function(){
    cy.visit('/commands/network-requests')
    cy.intercept('GET','**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) => {
      cy.log("Response:", res)
    })
  })


  // it('updates fixture Data inline',() =>{
  //   cy.fixture('example').then((data) =>{
  //     data.email = 'updatedmail@bla.com'
  //     cy.log(data)
  //   })
  // })

  // it('AFter updation using this operator', () => {
  //   cy.fixture('example').then(function(data){
  //     this.data = data
  //     this.data.email = 'abcabc@bca.com'
  //     cy.log(this.data)
  //   })
  // })
})