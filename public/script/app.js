"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('App.js is running!');

var ToDoListApp = function (_React$Component) {
  _inherits(ToDoListApp, _React$Component);

  function ToDoListApp() {
    _classCallCheck(this, ToDoListApp);

    return _possibleConstructorReturn(this, (ToDoListApp.__proto__ || Object.getPrototypeOf(ToDoListApp)).apply(this, arguments));
  }

  _createClass(ToDoListApp, [{
    key: "render",
    value: function render() {
      var title = "To-do List";
      var subTitle = "Lock-down Edition!!";
      var tasks = ['one', 'two'];

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Tasks, { tasks: tasks }),
        React.createElement(AddTask, null)
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "ol",
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
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        "task:",
        this.props.taskText
      );
    }
  }]);

  return Task;
}(React.Component);

var AddTask = function (_React$Component5) {
  _inherits(AddTask, _React$Component5);

  function AddTask() {
    _classCallCheck(this, AddTask);

    return _possibleConstructorReturn(this, (AddTask.__proto__ || Object.getPrototypeOf(AddTask)).apply(this, arguments));
  }

  _createClass(AddTask, [{
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();

      var task = e.target.elements.task.value.trim();

      if (task) {
        alert(task);
        e.target.elements.task.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "form",
          { onSubmit: this.handleAdd },
          React.createElement("input", { type: "text", name: "task" }),
          React.createElement(
            "button",
            null,
            "Add"
          )
        )
      );
    }
  }]);

  return AddTask;
}(React.Component);

ReactDOM.render(React.createElement(ToDoListApp, null), document.getElementById('app'));
