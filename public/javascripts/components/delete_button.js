var DeleteButton = React.createClass({
  deleteTask: function() {
    console.log("Deleting task");

    // index = @state.tasks.indexOf task
    // tasks = React.addons.update(@state.tasks, { $splice: [[index, 1]] })
    // @replaceState tasks: tasks
  },

  render: function() {
    return (
      // <div className="deleteButton">
      <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash" />
      // </div>
      )
  }
})
