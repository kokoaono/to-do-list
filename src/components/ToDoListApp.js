import React from 'react';

import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';
import Action from './Action'
import OptionModal from './OptionModal';

class ToDoListApp extends React.Component{
  state = {
    tasks: [],
    selectedTask: undefined
  };

  handleDeleteModal = () => {
    this.setState(() => ({selectedTask: undefined}))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() *this.state.tasks.length);
    const task = this.state.tasks[randomNum];
    this.setState(() => ({
      selectedTask: task
    }))
  };

  handleDeleteTasks = () => {
    this.setState(() => {
      return{
        tasks: []
      }
    })
  };

  handleDeleteTask = (taskToRemove) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task)
    }))
  };  

  handleAdd = (task) => {
    if(!task){
      return 'Add new task to the list!!'
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists.'
    }
    this.setState((prevState) => ({tasks: prevState.tasks.concat(task)}))
  };

  componentDidMount(){
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

    if(tasks){
      this.setState(() => ({ tasks }))
    }
  } catch (e) {
  }  
};

  componentDidUpdate(prevProps, prevState){
    if(prevState.tasks.length !== this.state.tasks.length){
      const json = JSON.stringify(this.state.tasks)
      localStorage.setItem('tasks', json)
      console.log('saving data');
    }
  }; 

  render(){
    const subTitle = "Lock-down!!"

    return (
      <div>
        <Header subTitle={subTitle} />
        <Tasks 
        tasks={this.state.tasks}
        handleDeleteTasks={this.handleDeleteTasks}
        handleDeleteTask={this.handleDeleteTask}        
        />
        <Action
          hasTasks={this.state.tasks.length > 0}
          handlePick={this.handlePick}
        />
        <AddTask handleAdd={this.handleAdd} />
        <OptionModal
          selectedTask={this.state.selectedTask}
          handleDeleteModal={this.handleDeleteModal}        
        />
      </div>
    )
  }
};

export default ToDoListApp