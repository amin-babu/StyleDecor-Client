import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";

const MyBookings = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['myBookings', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">My Bookings</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Service Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking.id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{booking.serviceName}</td>
                <td>{booking.serviceDate}</td>

                {/* Status */}
                <td>
                  <span className={`badge ${booking.status === "Pending"
                    ? "badge-warning"
                    : "badge-success"
                    }`}>
                    {booking.status}
                  </span>
                </td>

                {/* Payment */}
                <td>
                  {
                    booking.paid ?
                      <span className='badge badge-success'>
                        Paid
                      </span> :
                      <span className='badge badge-error'>
                        Unpaid
                      </span>
                  }
                </td>

                {/* Action */}
                <td className="space-x-2">
                  {booking.paid === false ? (
                    <>
                      <button className="btn-main btn-sm">Pay</button>
                      <button className="btn-two btn-sm btn-error">Cancel</button>
                    </>
                  ) : (
                    <span className="text-green-600 font-medium">Paid</span>
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

export default MyBookings;
