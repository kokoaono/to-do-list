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
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAdd}>
          <input className="add-option__input" type='text' name='task' />
          <button className="button">Add Task</button>
        </form>
      </div>
    )
  }
}

export default AddTask