import React from "react";

import User from "../schemas/User";
import UserName from "./UserName";

const user = new User("Josh", "Perez");
const element = (
  <h1>
    Hello, <UserName user={user} /> !
  </h1>
);

const App = () => {
  return element;
};

export default App;
