console.log('App.js is running!');
class ToDoListApp extends React.Component{
  render(){
    const title = "To-do List" 
    const subTitle = "Lock-down Edition!!"
    const tasks = ['one', 'two']

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Tasks tasks={tasks} />
        <AddTask />
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
        task:{this.props.taskText}
      </div>
    )
  }
}

class AddTask extends React.Component{
  handleAdd(e){
    e.preventDefault();

    const task = e.target.elements.task.value.trim();

    if(task){
      alert(task)
      e.target.elements.task.value = '';
    }

  }
  render (){
    return (
      <div>
        <form onSubmit={this.handleAdd}>
        <input type='text' name='task' />
        <button>Add</button>
        </form>
      </div>
    )
  }
}




ReactDOM.render(<ToDoListApp />, document.getElementById('app'));