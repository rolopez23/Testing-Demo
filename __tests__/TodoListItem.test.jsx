/**
 * @jest-environment enzyme
 */

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });




import TodoListItem from '../client/components/TodoListItem.jsx';

const sampleTodo = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}


test('Renders the status component', ()=> {
  const wrapper = shallow(<TodoListItem todo={sampleTodo}/>);
  expect(wrapper).toContainExactlyOneMatchingElement('TodoListItemStatus');
})

test('Renders the text', ()=> {
  const wrapper = shallow(<TodoListItem todo={sampleTodo}/>);
  expect(wrapper).toIncludeText('delectus aut autem');
})