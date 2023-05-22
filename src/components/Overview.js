import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;
