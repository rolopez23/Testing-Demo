import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, getByText, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import App from '../client/components/App.jsx'

//Setup 
//Need to make a server
const route = 'https://jsonplaceholder.typicode.com/todos';

const server = setupServer(
  rest.get(route, (req, res, ctx) =>{
    return res(ctx.json([{
      "userId": 1,
      "id": 1,
      "title": "todo one",
      "completed": false
    }, {
      "userId": 2,
      "id": 2,
      "title": "todo two",
      "completed": false
    }]))
  }),
)
  //Need to mock out route
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(()=> server.close())

test('loads and displays todos', async ()=> {
  //TODO test the todo list app!
  //render the component
  render(<App />)
  // wait for the second render
  waitFor(()=>screen.getByText('todo one'))

  expect(screen.getByText('todo one')).toExist()
  expect(screen.getByText('todo two')).toExist()
  //test if the todos are on teh screen 

})

test('handles a click event', async ()=> {
  //TODO test the todo list app!
})