import React from "react";

function DisplayTime(props) {
  return <span>{props.time.toLocaleTimeString()}</span>;
}

export default DisplayTime;
