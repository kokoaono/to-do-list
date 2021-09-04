import React from 'react';

const Action = (props) => (
  <div>
    <button
    className="big-button"
    onClick={props.handlePick}
    disabled={!props.hasTasks}
    >
      What Should I pick!
    </button>
  </div>
);

export default Action