var TaskList = React.createClass({
  redner: function() {
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
