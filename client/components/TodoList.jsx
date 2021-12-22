import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({ todos }) => {
  todos = todos.slice(0, 20);
  return (
    <ul className="list-group">
        {todos.map(todo => (
            <TodoListItem
                role="todo"
                todo={todo} 
                key={todo.id}
            />
        ))}
    </ul>
)
        };

export default TodoList