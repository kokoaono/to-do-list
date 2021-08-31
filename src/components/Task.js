import React from 'react';

const Task = (props) => {
  return(
    <div>
      <strong>TASK:</strong> {props.taskText}
      <button onClick={(e) =>{
        props.handleDeleteTask(props.taskText)}}
      >
      DONE!
      </button>
    </div>
  )
}

export default Task