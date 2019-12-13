import React from "react";

import loadUserAsync from "../services/UserService";

import WelcomeMessage from "./WelcomeMessage";
import CurrentTime from "./CurrentTime";
import UserInfo from "./UserInfo";

const updateDelayInMs = 1000;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    loadUserAsync().then(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div>
        <WelcomeMessage user={this.state.user} />
        <CurrentTime delayInMs={updateDelayInMs} />
        {this.state.user !== undefined ? <UserInfo user={this.state.user} /> : <span>Loading user ...</span>}
      </div>
    );
  }
}

export default App;
