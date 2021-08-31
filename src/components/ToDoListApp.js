import React from 'react';

import AddTask from './AddTask';
import Header from './Header';
import Tasks from './Tasks';

class ToDoListApp extends React.Component{
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);

    this.state ={
      tasks: props.tasks
    };
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

    if(tasks){
      this.setState(() => ({ tasks }))
    }
  } catch (e) {

  }  
}

  componentDidUpdate(prevProps, prevState){
    if(prevState.tasks.length !== this.state.tasks.length){
      const json = JSON.stringify(this.state.tasks)
      localStorage.setItem('tasks', json)
      console.log('saving data');
    }
  }

  handleDeleteTasks(){
    this.setState(() => {
      return{
        tasks: []
      }
    })
    alert('Congrats! All tasks Completed!')
  }

  handleDeleteTask (taskToRemove) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => taskToRemove !== task)
    }))
  }
  

  handleAdd(task){
    if(!task){
      return 'Add new task to the list!!'
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists.'
    }

    this.setState((prevState) => ({tasks: prevState.tasks.concat(task)}))
  }

  render(){
    const subTitle = "Lock-down Edition!!"

    return (
      <div>
        <Header subTitle={subTitle} />
        <Tasks 
        tasks={this.state.tasks}
        handleDeleteTasks={this.handleDeleteTasks}
        handleDeleteTask={this.handleDeleteTask}        
        />

        <AddTask handleAdd={this.handleAdd} />
      </div>
    )
  }
}

ToDoListApp.defaultProps = {
  tasks: []
}



export default ToDoListApp