import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/user/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            console.log('Deleted Successfully')
            const remainigUsers = users.filter(user => user._id !== id);
            setUsers(remainigUsers)
        }
    })
  }
  return (
    <div className="max-w-[900px] m-auto">
        <h1 className="text-center my-20 font-bold text-[30px]">Total User : {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map(user => <tr>
                    <th>1</th>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td><button onClick={() => handleDelete(user._id)} className="border p-2 text-[20px] font-bold">x</button></td>
                  </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
