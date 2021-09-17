import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, getByText} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import App from '../client/components/App.jsx'

//Setup 
//Need to make a server
const route = 'https://jsonplaceholder.typicode.com/todos';

const server = setupServer(
  rest.get(route, (req, res, ctx) =>{
    return res(ctx.json({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }))
  }),
)
  //Need to mock out route
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(()=> server.close())

test('loads and displays todos', async ()=> {
  const {getByText} = render(<App />)
  expect(await getByText("delectus aut autem")).toBeInTheDocument()
})