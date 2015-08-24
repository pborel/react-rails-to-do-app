var TaskList = React.createClass({
  render: function() {
    var taskNodes = this.props.data.map(function (task) {
      return (
        <Task>
          <td>
            {task.text}
          </td>
          <td>
            <button onClick={task.edit} className="btn btn-success btn-sm" />
          </td>
        </Task>
      );
    });

    return (
      <table className="taskList table table-bordered">
        <tbody>
          {taskNodes}
        </tbody>
      </table>
    );
  }
})
