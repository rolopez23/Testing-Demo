import React from 'react';
import TodoListItemStatus from './TodoListItemStatus.jsx';

const TodoListItem = ({ todo }) => (
    <li className="list-group-item row">
        <span className="col align-self-start">{todo.title}</span>
        <TodoListItemStatus id={todo.id} status={todo.completed} />
    </li>
);

export default TodoListItem;