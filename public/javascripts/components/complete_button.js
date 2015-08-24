var CompleteButton = React.createClass({
  getInitialState: function() {
    return {completed: false}
  },

  handleComplete: function() {
    this.setState({completed: !this.state.completed})
  },

  render: function() {
    if(this.state.completed) {
      // TODO: remove from dom when completed
      console.log("Remove me from dom")
    }

    return (
      <div>
        <input type="checkbox" onChange={this.handleComplete} />
      </div>
      )
  }
})
