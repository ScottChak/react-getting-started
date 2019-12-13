import React from "react";

import DisplayTime from "./DisplayTime";

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = { running: true, time: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), this.props.delayInMs);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState((state, props) => {
      return { user: state.user, time: state.running === true ? new Date() : state.time };
    });
  }

  render() {
    return (
      <h2>
        It is <DisplayTime time={this.state.time} />
      </h2>
    );
  }
}

export default CurrentTime;
