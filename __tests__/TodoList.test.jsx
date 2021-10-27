import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodoList from '../client/components/TodoList.jsx';

Enzyme.configure({ adapter: new Adapter() });

const zeroTodo = [];
const oneTodo = [{}];
const threeTodos = [{}, {},{}];




test('Renders an empty todo component', ()=> {
  const wrapper = mount(<TodoList todos={zeroTodo}/>);
  expect(wrapper).toContainMatchingElements(0,'li')
})

test('Renders a single todo component', ()=> {
  const wrapper = mount(<TodoList todos={oneTodo}/>);
  expect(wrapper).toContainMatchingElements(1,'li')
})

test('Renders an empty todo component', ()=> {
  const wrapper = mount(<TodoList todos={threeTodos}/>);
  expect(wrapper).toContainMatchingElements(3,'li')
})