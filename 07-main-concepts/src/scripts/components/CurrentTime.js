import React from "react";

import DisplayTime from "./DisplayTime";

class CurrentTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = { running: true, time: new Date() };

    //  I do like this, but i read the warnings about onClick={e => this.onClickToggleRunning(e)}, and i don't want to look into experimental alternatives
    this.onClickToggleRunning = this.onClickToggleRunning.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), this.props.delayInMs);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState((state, props) => {
      return { time: state.running === true ? new Date() : state.time };
    });
  }

  onClickToggleRunning(e) {
    this.setState((state, props) => {
      return { running: !state.running };
    });
  }

  render() {
    return (
      <div>
        <h2>
          It is <DisplayTime time={this.state.time} />
        </h2>
        <button onClick={this.onClickToggleRunning}>{this.state.running ? "Stop" : "Resume"}</button>
      </div>
    );
  }
}

export default CurrentTime;
