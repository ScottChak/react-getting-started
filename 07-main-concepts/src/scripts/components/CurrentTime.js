import React from "react";

import DisplayTime from "./DisplayTime";

function CurrentTime(props) {
  return (
    <h2>
      It is <DisplayTime time={props.time} />
    </h2>
  );
}

export default CurrentTime;
