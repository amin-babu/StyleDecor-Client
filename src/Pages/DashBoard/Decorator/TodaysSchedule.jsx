import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../Components/Loading";

const TodaysSchedule = () => {

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: userInfo = [], isLoading: userLoading } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const { data: allBookings = [], isLoading } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-bookings`);
      return res.data;
    },
  });

  const assignedProjects = allBookings.filter(booking => booking.decoratorId == userInfo?._id);
  const today = new Date().toISOString().split("T")[0];
  const todaysSchedule = assignedProjects.filter(p => p.serviceDate === today);

  if (isLoading || userLoading) {
    return <Loading />;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Today's Schedule</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {todaysSchedule.map((item) => (
          <div
            key={item._id}
            className="card bg-base-100 shadow-lg rounded-2xl border border-gray-100 hover:shadow-xl transition"
          >
            <div className="card-body space-y-3">

              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {item.serviceName}
                </h3>
                <span className="badge badge-primary capitalize">
                  {item.status}
                </span>
              </div>

              {/* Divider */}
              <div className="divider my-0"></div>

              {/* Details */}
              <div className="space-y-1 text-sm text-gray-600">
                <p>
                  👤 <span className="font-medium">Client:</span> {item.userName}
                </p>
                <p>
                  📅 <span className="font-medium">Date:</span> {item.serviceDate}
                </p>
                <p>
                  📍 <span className="font-medium">Location:</span> {item.location}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>

      {todaysSchedule.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No schedule for today 🎉
        </p>
      )}
    </div>
  );
};

export default TodaysSchedule;
