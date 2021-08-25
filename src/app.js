class ToDoListApp extends React.Component{
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDeleteTasks = this.handleDeleteTasks.bind(this);

    this.state ={
      tasks: []
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
  

  handleAdd(task){
    if(!task){
      return 'Add new task to the list!!'
    } else if (this.state.tasks.indexOf(task) > -1) {
      return 'This task already exists.'
    }

    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.concat(task)
      }
    })
  }

  render(){
    const title = "To-do List" 
    const subTitle = "Lock-down Edition!!"

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Tasks tasks={this.state.tasks} />
        <AddTask handleAdd={this.handleAdd} />
        <Action handleDeleteTasks={this.handleDeleteTasks} />
      </div>
    )
  }
}
class Header extends React.Component {
  render (){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}

class Tasks extends React.Component {
  render (){
    return(
      <div>
        <ol>
          {this.props.tasks.map((task) => <Task key={task} taskText={task} />)}
        </ol>
      </div>
    )
  }
}

class Task extends React.Component {
  render(){
    return(
      <div>
        <strong>TASK:</strong> {this.props.taskText}
      </div>
    )
  }
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

    this.setState(() => {
      return { error }
    })

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

class Action extends React.Component {
  handleDeleteTasks(){
    const error = this.props.handleDeleteTasks(task)
  }

  render(){
    return (
      <div>
        <button onClick={this.props.handleDeleteTasks}>Clear all Tasks</button>
      </div>
    )
  }
}



ReactDOM.render(<ToDoListApp />, document.getElementById('app'));