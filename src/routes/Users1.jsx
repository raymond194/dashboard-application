import React from "react";

const Users1 = () => {
  return (
    <div className="bg-slate-50 shadow rounded p-4 overflow-x-auto mt-5 ml-4">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>

            {users.map((user) => (
              <tr key={user.id} className="border-b hover:text-blue-800 cursor-pointer">
              <td className="px-4 py-2 text-left ">{user.name}</td>
              <td className="px-4 py-2 text-left">{user.email}</td>
              <td className="px-4 py-2 text-left">{user.role}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const users = [
  { name: "John Doe", email: "johndoe@gmail.com", role: "Admin", id: 1},
  { name: "Harvey Specter", email: "harvey@gmail.com", role: "Editor",id: 2 },
  { name: "Raymond Josh", email: "Josh@gmail.com", role: "Publisher", id: 3 },
  { name: "Mike Ross", email: "ross@gmail.com", role: "Viewer", id: 4 },
  { name: "Cole Walter", email: "Walter@gmail.com", role: "Writer", id: 5 },
];

export default Users1;
