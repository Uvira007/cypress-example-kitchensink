context('mySecondTest', () =>{

    // it('types an email', () =>{
    //     cy.visit('/commands/actions')
    //     cy.findByPlaceholderText('Email').type('test@123.com')
    //     cy.wait(2000).then(() => {
    //         fetch('https://api.spacexdata.com/v3/missions')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res)
    //         })
    //     })
    // })

    // it('check if the menu is highlighted', () =>{
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    // })

    // it('check other links are not active', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active').find('a')
    //     .should('have.attr', 'href', '/commands/querying')
    // })

    it('check if the link is correct', () =>{
        cy.visit('/')
        //cy.findAllByText('Commands').first().click()
        cy.findAllByText('Actions').first().click({force: true})
        cy.url().should('contain', 'commands/actions')
    })

    it('lets you input a value to the type field', () =>{
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test').should('have.value', 'test')
    })

    it('clear an input field', () => {
        cy.visit('/commands/actions')
        cy.findByLabelText('Describe:').type('Test Description').should('have.value', 'Test Description')
        .clear().should('have.value','')
    })

    it('lets you check a checkbox', () =>{
        cy.visit('/commands/actions')
        cy.get('.action-checkboxes [value = "checkbox1"]').check().should('be.checked')
    })

})