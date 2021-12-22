import React, {useState} from 'react';

const TodoListItemStatus = ({ status, id }) => {
  
  const [displayStatus, setStatus] = useState(status);

  const changeStatus = () => {
    setStatus(!displayStatus);
  }

  return (
    <span onClick={changeStatus} id={`status${id}`} className="col align-self-end">
      {displayStatus === true ? String.fromCharCode(10003) : 'X'}
    </span>
  )
}
export default TodoListItemStatus;