const todos = require('../fixtures/todos.json');

describe('Todo tests', () => {
  beforeEach(()=>{
    cy.intercept('get','/todos').as('getTodos');
    cy.visit('/');
    cy.wait('@getTodos');
  })
  //Simple test to make sure we are rendering,
  //Probably not necessary
  it('App renders', () => {
    cy.visit('/')
  })

  //Again also covered by before each. But not you can 
  //monitor API requests
  it('makes an API call on load', ()=> {
    cy.get('@getTodos').should('exist')
  })

  //First semi-useful test can be used to see whaat is on
  it('Renders a todo', () => {
    cy.contains("li").should('exist')
  })

  it('Allows a user to click an item', ()=> {
    cy.contains('X')
    cy.get('#status1').click()
    cy.contains(String.fromCharCode(10003))
  })


})