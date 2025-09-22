import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { userdelete } from "../Store/reducers/Userreducer";
// import { userdelete } from "./Store/reducer/Userreducer";

function Users() {
  const { users } = useSelector((state) => state.userReducer)
   const dispatch=useDispatch();

  const deletehandler = (index) => {
    dispatch(userdelete(index));
  } 

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Users List</h1>
      <ul className="bg-white rounded-lg shadow-md w-full max-w-md">
        {users.map((user,index) => (
          <li
            key={user.id}
            className="px-4 py-2 border-b last:border-b-0 hover:bg-gray-50 transition flex justify-between items-center"
          >
            {user.name}
            <span
              onClick={() => deletehandler(index)}
              className="text-red-500 font-bold cursor-pointer"
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users;
