var TaskForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault()

    // var status = React.findDOMNode(this.refs.status)
    var text = findDOMNode(this.refs.text).value.trim();

    if (!text) {
      return;
    }

    this.props.onTaskSubmit({text: text});
    React.findDOMNode(this.refs.text) = '';
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
