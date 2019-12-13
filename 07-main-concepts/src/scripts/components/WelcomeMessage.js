import React from "react";

import DisplayUserName from "./DisplayUserName";

function WelcomeMessage(props) {
  return (
    <h1>
      Hello, <DisplayUserName user={props.user} />
    </h1>
  );
}

export default WelcomeMessage;
