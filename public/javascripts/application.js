var TaskForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault()

    // var status = React.findDOMNode(this.refs.status)
    var text = React.findDOMNode(this.refs.text).value.trim();

    if (!text) {
      return;
    }

    this.props.onTaskSubmit({text: text});
    React.findDOMNode(this.refs.text).value = '';
    return;
  },

  render: function() {
    return (
      <form className="taskForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Carpe diem. . ." ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var ToDoList = React.createClass({
  loadTasksFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleTaskSubmit: function(task) {
    var tasks = this.state.data;
    var newTasks = tasks.concat([task]);
    this.setState({data: newTasks});

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: task,
      success: function(data) {
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },

  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    this.loadTasksFromServer();
    setInterval(this.loadTasksFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div className="toDoList">
        <h1>Tasks</h1>
        <TaskForm onTaskSubmit={this.handleTaskSubmit} />
        <TaskList data={this.state.data} />
      </div>
    );
  }
});

var TaskList = React.createClass({
  render: function() {
    var taskNodes = this.props.data.map(function (task) {
      return (
        <Task>
          {task.text}
        </Task>
      );
    });

    return (
      <div className="taskList">
        {taskNodes}
      </div>
    );
  }
})

var Task = React.createClass({
  render: function() {
    return (
      <div className="task">
        {this.props.children}
      </div>
    )
  }
})

React.render(
  <ToDoList url="http://localhost:3000/tasks" pollInterval={2000} />,
  document.getElementById('content')
)
