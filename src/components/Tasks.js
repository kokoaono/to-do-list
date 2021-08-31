import React from 'react';

import Task from './Task';

const Tasks = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteTasks}>Clear all Tasks</button>
      {props.tasks.length === 0 && <p>Please add a task to start!</p>}
      {
        props.tasks.map((task) => (
         <Task 
         key={task} 
         taskText={task}
         handleDeleteTask={props.handleDeleteTask}
         />
         ))
      }
    </div>
  )
}

export default Tasks