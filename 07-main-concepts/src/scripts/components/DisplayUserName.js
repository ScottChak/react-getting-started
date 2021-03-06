import React from "react";

//  Need to require react because babel compiles this to React.createElement
function DisplayUserName(props) {
  return <span>{props.user !== undefined ? `${props.user.firstName} ${props.user.lastName}` : "Stranger"}</span>;
}

export default DisplayUserName;
