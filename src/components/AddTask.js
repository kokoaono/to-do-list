import React from 'react';


class AddTask extends React.Component{
  state = {
    error: undefined
  };

  handleAdd = (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAdd(task)

    this.setState(() => ({ error }))

    if(!error){
      e.target.elements.task.value = '';
    };
  };

  render (){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAdd}>
          <input type='text' name='task' />
          <button className="button">Add Task</button>
        </form>
      </div>
    )
  }
}

export default AddTask