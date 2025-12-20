import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Loading from "../../../Components/Loading";

const EarningsSummary = () => {

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

  const completedProjects = assignedProjects.filter(
    p => p.status === "completed"
  );

  const totalEarning = completedProjects.reduce(
    (total, p) => total + (p.servicePrice || 0),
    0
  );

  const currentMonth = new Date().toISOString().slice(0, 7);

  const thisMonthEarning = completedProjects
    .filter(p => p.serviceDate?.startsWith(currentMonth))
    .reduce((sum, p) => sum + (p.servicePrice || 0), 0);

  const pendingJobs = assignedProjects.filter(
    p => p.status !== "completed"
  ).length;

  const summary = {
    totalEarning: totalEarning,
    completedJobs: completedProjects.length,
    pendingJobs: pendingJobs,
    thisMonth: thisMonthEarning,
  };

  if (isLoading || userLoading) {
    return <Loading />;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Earnings Summary</h2>

      <div className="grid md:grid-cols-4 gap-6">

        {/* Total Earnings */}
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">Total Earnings</div>
          <div className="stat-value text-green-600">
            ৳ {summary.totalEarning}
          </div>
          <div className="stat-desc">All time</div>
        </div>

        {/* This Month */}
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">This Month</div>
          <div className="stat-value text-primary">
            ৳ {summary.thisMonth}
          </div>
          <div className="stat-desc">Current month</div>
        </div>

        {/* Completed Jobs */}
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">Completed Projects</div>
          <div className="stat-value">
            {summary.completedJobs}
          </div>
          <div className="stat-desc">Successfully done</div>
        </div>

        {/* Pending Jobs */}
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">Pending Projects</div>
          <div className="stat-value text-warning">
            {summary.pendingJobs}
          </div>
          <div className="stat-desc">In progress</div>
        </div>

      </div>
    </div>
  );
};

export default EarningsSummary;
