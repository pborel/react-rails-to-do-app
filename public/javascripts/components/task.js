var Task = React.creatClass({
  edit: function() {
    this.setState({editing: true});
  },

  save: function() {
    this.setState({editing: false});
  },

  render: function() {
    return (
      <div className="task">
        {this.props.text}
      </div>
    )
  }
})
