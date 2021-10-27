import React from 'react'
//libary to mock out a server
import {rest} from 'msw'
import {setupServer} from 'msw/node'
// library to test react
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

//import component I want to test
import Greeting from '../client/components/Greeting.jsx';

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}))
  }),
)
// setup server before each test
beforeAll(() => server.listen())
//after each test reset server
afterEach(() => server.resetHandlers())
//bring the server down
afterAll(() => server.close())

test('loads and displays greeting', async () => {
  //Renders the component
  render(<Greeting url="/greeting" />)
  //Tests it with a click event
  fireEvent.click(screen.getByText('Load Greeting'))
  
  //await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    }),
  )

  render(<Greeting url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('alert'))

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toBeDisabled()
})