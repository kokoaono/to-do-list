import React from 'react';

const Action = (props) => {
  return (
  <div>
    <button 
    onClick={props.handlePick}
    disabled={!props.hasTasks}
    >
      What Should I pick!
    </button>
  </div>
  );
};

export default Action