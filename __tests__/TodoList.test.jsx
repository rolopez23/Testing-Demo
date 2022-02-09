import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../client/components/TodoList.jsx';

Enzyme.configure({ adapter: new Adapter() });


//Sample mock data


//Step 1: What do we care about with Todo List? 
// Aka what problem does it solve.

//Step 2: How can we design tests that verify this?
// Aka mimic behavior, testing suite may be necessary

//Step 3: Create the desired environment ()


test('Renders an empty todo component', ()=> {
  // Mimic a wrapper
  const wrapper = mount(<TodoList todos={zeroTodo}/>);
  // Check how many ls exist, should be zero
  expect(wrapper).toContainMatchingElements(0,'li')
})

test('Renders a single todo component', ()=> {

})

test('Renders an empty todo component', ()=> {

})

test('Todo list shows at most 20 todos', () => {

})