import React from 'react';

const TodoListItemStatus = ({ status }) => (
    <span className="col align-self-end">{status === true ? String.fromCharCode(10003) : 'X'}</span>
)

export default TodoListItemStatus;