import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../Components/Loading";
import { useState } from "react";

const MyAssignedProjects = () => {
  const [selectedStatus, setSelectedStatus] = useState("");



  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // console.log(user);

  // geting user
  const { data: userInfo = [], isLoading: userLoading } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  console.log('User:', userInfo._id);


  const { data: allBookings = [], isLoading, refetch } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-bookings`);
      return res.data;
    },
  });
  console.log('allBookings', allBookings);

  const assignedProjects = allBookings.filter(booking => booking.decoratorId == userInfo?._id);
  console.log('assignedProjects', assignedProjects);


  const handleUpdateStatus = async (id) => {
    await axiosSecure.patch(`/bookings/status/${id}`, {
      status: selectedStatus,
      paidAt: new Date()
    });
    refetch();
  };

  if (isLoading || userLoading) {
    return <Loading />;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Assigned Projects</h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table table-zebra">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Event Date</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {assignedProjects.map((project, index) => (
              <tr key={project.id}>
                <th>{index + 1}</th>
                <td>{project.serviceName}</td>
                <td>{project.serviceDate}</td>
                <td>
                  <span className="badge badge-outline">
                    {project.status}
                  </span>
                </td>
                <td className="flex gap-2">
                  <select
                    className="select select-sm select-bordered"
                    value={selectedStatus || project.status}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    disabled={project.status === "completed"}
                  >
                    <option value="pending" disabled={project.status !== "pending"}>
                      pending
                    </option>

                    <option value="confirmed" disabled={project.status === "completed"}>
                      confirmed
                    </option>

                    <option value="ongoing" disabled={project.status === "pending"}>
                      ongoing
                    </option>

                    <option value="completed">
                      completed
                    </option>
                  </select>


                  <button
                    className="btn btn-xs btn-success"
                    onClick={() => handleUpdateStatus(project._id)}
                    disabled={project.status === "completed"}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignedProjects;
