import React from 'react';

const Task = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.taskText}</p>

    <button className="button button--link"
    onClick={(e) =>{
      props.handleDeleteTask(props.taskText)}}
    >
    DONE!
    </button>
  </div>
);

export default Task