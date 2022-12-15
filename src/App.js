import axios from "axios";
import { useEffect, useState } from "react";

import UsersList from "./Context";
import GitList from "./components/GitList";

export default function App() {
  const [gitUsers, setGitUsers] = useState(null);

  useEffect(() => {
    (async function () {
      await axios.get("https://api.github.com/users")
        .then(({ data }) => setGitUsers(data))
        .catch(err => console.log(err));
    })();
  });

  return (
    <UsersList.Provider value={gitUsers}>
      <GitList />
    </UsersList.Provider>
  );
}
