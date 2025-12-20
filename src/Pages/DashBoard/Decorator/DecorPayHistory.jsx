import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading";

const DecorPayHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: allBookings = [], isLoading } = useQuery({
    queryKey: ["all-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-bookings");
      return res.data;
    },
  });

  const { data: userInfo = {}, isLoading: userLoading } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  if (isLoading || userLoading) {
    return <Loading />;
  }

  const paymentHistory = allBookings.filter(
    (b) =>
      b.decoratorId === userInfo?._id &&
      b.paymentStatus === "paid"
  );

  console.log(paymentHistory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        Decorator Payment History
      </h2>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table table-zebra">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Paid Date</th>
            </tr>
          </thead>

          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.serviceName}</td>
                <td>৳ {payment.servicePrice}</td>
                <td>
                  <span className="badge badge-success">
                    Paid
                  </span>
                </td>
                <td>
                  {payment?.paidAt
                    ? payment.paidAt.slice(0, 10)
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {paymentHistory.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No payment history found
        </p>
      )}
    </div>
  );
};

export default DecorPayHistory;
