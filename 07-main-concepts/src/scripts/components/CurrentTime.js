import React from "react";

//  Need to require react because babel compiles this to React.createElement
function CurrentTime(props) {
  return <span>It is {props.time.toLocaleTimeString()}</span>;
}

export default CurrentTime;
