import { faker } from '@faker-js/faker'

describe('Registration Flow', () => {
    let password = faker.internet.password()

    it('Enter the form details', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type(faker.person.firstName())
        cy.get('#input-lastname').type(faker.person.lastName())
        cy.get('#input-email').type(faker.internet.email())
        cy.get('#input-telephone').type(faker.phone.number())
        cy.get('#input-password').type(password)
        cy.get('#input-confirm').type(password)
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="checkbox"]').check()
        cy.get('.btn.btn-primary').click()
        cy.contains('Your Account Has Been Created!').should('be.visible')

    })
})