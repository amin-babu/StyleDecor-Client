import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Components/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2'

const ManageUsers = () => {

  const axiosSecure = useAxiosSecure();

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  });

  const localUsers = users.filter(user => user.role !== 'admin');

  console.log(localUsers);

  const handleMakeDecorator = user => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make "${user?.displayName}" a Decorator? This will give them decorator access.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Yes, make Decorator",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "decorator" };

        axiosSecure.patch(`/users/${user._id}`, roleInfo)
          .then(res => {
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: "Success!",
                text: `${user?.displayName} is now a Decorator.`,
                icon: "success",
              });
            }
          })

      }
    });
  };


  const removeDecorator = user => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove "${user?.displayName}" from the Decorator role? They will lose decorator access.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626", 
      cancelButtonColor: "#6b7280",  
      confirmButtonText: "Yes, remove role",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "user" };

        axiosSecure.patch(`/users/${user._id}`, roleInfo)
          .then(res => {
            if (res.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: "Role Removed!",
                text: `${user?.displayName} is no longer a Decorator.`,
                icon: "success",
              });
            }
          });
      }
    });
  };


  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Users</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {localUsers.map((user, index) => (
              <tr key={user._id} className="hover">
                <td>{index + 1}</td>

                {/* Image + Name */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {
                        user.photoURL ?
                          <div className="w-10 rounded-full">
                            <img src={user?.photoURL} alt={user.displayName} />
                          </div> :
                          <FaUserCircle />
                      }
                    </div>
                    <div>
                      <div className="font-medium">{user?.displayName}</div>
                    </div>
                  </div>
                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={`badge ${user.role === "decorator"
                      ? "badge-success"
                      : "badge-outline"
                      }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  {user.role === "user" ? (
                    <button
                      onClick={() => handleMakeDecorator(user)}
                      className="px-4 py-2 text-sm rounded-lg bg-primary text-white hover:bg-[#169994] transition cursor-pointer"
                    >
                      Make Decorator
                    </button>
                  ) : (
                    <button
                      onClick={() => removeDecorator(user)}
                      className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
                    >
                      Remove Decorator
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
