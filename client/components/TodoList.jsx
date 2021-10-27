import React from 'react';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({ todos }) => (
    <ul className="list-group">
        {todos.map(todo => (
            <TodoListItem
                role="todo"
                todo={todo} 
                key={todo.id}
            />
        ))}
    </ul>
);

export default TodoList