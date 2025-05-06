/// <reference types='Cypress' />
describe("my test suite project11",()=>{
    it("my test cases of project1",()=>{
        cy.visit("https://www.automationexercise.com/");
        cy.contains("Website for automation practice")
    })
})
