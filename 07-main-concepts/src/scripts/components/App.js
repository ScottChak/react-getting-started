import React from "react";

import User from "../schemas/User";

import WelcomeMessage from "./WelcomeMessage";
import CurrentTime from "./CurrentTime";
import UserInfo from "./UserInfo";

const user = new User("Josh", "Perez", "https://eu.ui-avatars.com/api/?name=Josh+Perez&background=0D8ABC&color=fff");
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
        <WelcomeMessage user={this.state.user} />
        <CurrentTime time={this.state.time} />
        <UserInfo user={this.state.user} />
      </div>
    );
  }
}

export default App;
