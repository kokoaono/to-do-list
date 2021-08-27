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

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
      </div>
    )
  }

  Header.defaultProps = {
    title: 'To-do List'
  }

const Tasks = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteTasks}>
        Clear all Tasks
      </button>
      <ol>
        {props.tasks.map((task) =>
         <Task 
         key={task} 
         taskText={task}
         handleDeleteTask={props.handleDeleteTask}
         />)}
      </ol>
    </div>
  )
}

const Task = (props) => {
  return(
    <div>
      <strong>TASK:</strong> {props.taskText}
      <button onClick={(e) =>{
        props.handleDeleteTask(props.taskText)}}
      >
      DONE!
      </button>
    </div>
  )
}


class AddTask extends React.Component{
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleAdd(e){
    e.preventDefault();

    const task = e.target.elements.task.value.trim();
    const error = this.props.handleAdd(task)

    this.setState(() => ({ error }))
  }

  render (){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAdd}>
          <input type='text' name='task' />
          <button>Add Task</button>
        </form>
      </div>
    )
  }
}



ReactDOM.render(<ToDoListApp />, document.getElementById('app'));