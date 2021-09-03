import React from 'react';

const Task = (props) => (
  <div>
    <strong>TASK:</strong> {props.taskText}
    <button onClick={(e) =>{
      props.handleDeleteTask(props.taskText)}}
    >
    DONE!
    </button>
  </div>
);

export default Task