import User from "../schemas/User";

//  Something wrong with babel and async, not the point of figuring out here
function loadUserAsync() {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
    return new User("Josh", "Perez", "https://eu.ui-avatars.com/api/?name=Josh+Perez&background=0D8ABC&color=fff");
  });
}

export default loadUserAsync;
