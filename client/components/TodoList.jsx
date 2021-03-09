import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({ todos }) => (
    <ul className="list-group">
        {todos.map(todo => (
            <TodoListItem
                todo={todo} 
                key={todo.id}
            />
        ))}
    </ul>
);

export default TodoList