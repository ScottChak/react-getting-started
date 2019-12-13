import React from "react";

import DisplayTime from "./DisplayTime";

function UserInfo(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td rowSpan={2}>
            <img src={props.user.avatarUrl} />
          </td>
          <td>First Name</td>
          <td>{props.user.firstName}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{props.user.lastName}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserInfo;
