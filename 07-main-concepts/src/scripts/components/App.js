import React from "react";

import User from "../schemas/User";
import UserName from "./UserName";
import CurrentTime from "./CurrentTime";

const user = new User("Josh", "Perez");
const delayInMs = 1000;

function getInitialAppState(updateFunction) {
  var intervalId = setInterval(updateFunction, delayInMs);
  return { user, time: new Date(), running: true, intervalId };
}

function getNewAppState(currentState, updateFunction) {
  var intervalId = setInterval(updateFunction, delayInMs);
  return { user: currentState.user, time: new Date(), running: currentState.running, intervalId };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = getInitialAppState(() => {
      this.update();
    });
  }

  update() {
    if (this.state.running === true) {
      this.setState(
        getNewAppState(this.state, () => {
          this.update();
        })
      );
    }
  }

  render() {
    return (
      <div>
        <h1>
          Hello, <UserName user={this.state.user} /> !
        </h1>
        <h2>
          <CurrentTime time={this.state.time} />
        </h2>
      </div>
    );
  }
}

export default App;
