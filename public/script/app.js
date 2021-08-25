'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToDoListApp = function (_React$Component) {
  _inherits(ToDoListApp, _React$Component);

  function ToDoListApp(props) {
    _classCallCheck(this, ToDoListApp);

    var _this = _possibleConstructorReturn(this, (ToDoListApp.__proto__ || Object.getPrototypeOf(ToDoListApp)).call(this, props));

    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleDeleteTasks = _this.handleDeleteTasks.bind(_this);

    _this.state = {
      tasks: []
    };
    return _this;
  }

  _createClass(ToDoListApp, [{
    key: 'handleDeleteTasks',
    value: function handleDeleteTasks() {
      this.setState(function () {
        return {
          tasks: []
        };
      });
      alert('Congrats! All tasks Completed!');
    }
  }, {
    key: 'handleAdd',
    value: function handleAdd(task) {
      if (!task) {
        return 'Add new task to the list!!';
      } else if (this.state.tasks.indexOf(task) > -1) {
        return 'This task already exists.';
      }

      this.setState(function (prevState) {
        return {
          tasks: prevState.tasks.concat(task)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "To-do List";
      var subTitle = "Lock-down Edition!!";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Tasks, { tasks: this.state.tasks }),
        React.createElement(AddTask, { handleAdd: this.handleAdd }),
        React.createElement(Action, { handleDeleteTasks: this.handleDeleteTasks })
      );
    }
  }]);

  return ToDoListApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Tasks = function (_React$Component3) {
  _inherits(Tasks, _React$Component3);

  function Tasks() {
    _classCallCheck(this, Tasks);

    return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  _createClass(Tasks, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'ol',
          null,
          this.props.tasks.map(function (task) {
            return React.createElement(Task, { key: task, taskText: task });
          })
        )
      );
    }
  }]);

  return Tasks;
}(React.Component);

var Task = function (_React$Component4) {
  _inherits(Task, _React$Component4);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'strong',
          null,
          'TASK:'
        ),
        ' ',
        this.props.taskText
      );
    }
  }]);

  return Task;
}(React.Component);

var AddTask = function (_React$Component5) {
  _inherits(AddTask, _React$Component5);

  function AddTask(props) {
    _classCallCheck(this, AddTask);

    var _this5 = _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).call(this, props));

    _this5.handleAdd = _this5.handleAdd.bind(_this5);
    _this5.state = {
      error: undefined
    };
    return _this5;
  }

  _createClass(AddTask, [{
    key: 'handleAdd',
    value: function handleAdd(e) {
      e.preventDefault();

      var task = e.target.elements.task.value.trim();
      var error = this.props.handleAdd(task);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAdd },
          React.createElement('input', { type: 'text', name: 'task' }),
          React.createElement(
            'button',
            null,
            'Add Task'
          )
        )
      );
    }
  }]);

  return AddTask;
}(React.Component);

var Action = function (_React$Component6) {
  _inherits(Action, _React$Component6);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'handleDeleteTasks',
    value: function handleDeleteTasks() {
      var error = this.props.handleDeleteTasks(task);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteTasks },
          'Clear all Tasks'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render(React.createElement(ToDoListApp, null), document.getElementById('app'));
