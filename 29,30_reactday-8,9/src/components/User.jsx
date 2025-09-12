import React, { useContext } from "react";
import { Usercontext } from "../Context/Context"; // sahi path check karna
import { Link } from "react-router-dom";

function Users() {
  // context se value nikaal rahe
  const { user, setuser } = useContext(Usercontext);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">User List</h1>
      {Users.map((u)=> {
       <Link
       key={u.id}
       to={`/user/${u.id}`} className="mb-3 bg-red-100 p-3">
       </Link>
      })}

    </div>
  );
}

export default Users;
