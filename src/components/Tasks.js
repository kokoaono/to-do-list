import React from 'react';
import Task from './Task';

const Tasks = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title"> Your Options</h3>
      <button
      className="button button--link"
      onClick={props.handleDeleteTasks}
      >
        Clear all Tasks
      </button>
    </div>

    {props.tasks.length === 0 && <p className="widget__message">Please add a task to start!</p>}
    {
      props.tasks.map((task, index) => (
       <Task 
       key={task} 
       taskText={task}
       count={index + 1}
       handleDeleteTask={props.handleDeleteTask}
       />
       ))
    }
  </div>
);

export default Tasks