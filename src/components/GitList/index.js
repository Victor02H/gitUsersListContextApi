import { useContext } from "react";

import UsersList from "../../Context";

export default function GitList() {
  const list = useContext(UsersList);

  return (
    <>
      {list?.map(user => {
        return (
          <>
            <span key={user.id}>{user.login}</span> <br />
          </>
        );
      })}
    </>
  );
}
