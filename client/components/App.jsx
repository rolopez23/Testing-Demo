import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList.jsx';

const App = props => {
    const [ todos, setTodos] = useState([]);
    useEffect(() => {
      console.log('getting')
        axios.get('/todos')
            .then(({ data }) => {
                console.log(data)
                setTodos(data)
            })
    }, []);

    return (
        <div className="container">
            <h1>Another TodoList!</h1>
            <TodoList todos={todos} />
        </div>
    )
}

export default App;