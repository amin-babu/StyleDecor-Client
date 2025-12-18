import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";

const DashboardHome = () => {

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

  const pendingData = bookings.filter(booking => booking.status === 'pending');
  const totalPayment = bookings
    .filter(booking => booking.status !== "pending")
    .reduce((sum, booking) => sum + Number(booking.servicePrice), 0);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50">
      <div className="p-6 h-[88vh]">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Bookings */}
          <div className="rounded-2xl p-6 shadow bg-linear-to-r from-blue-500 to-blue-600 text-white">
            <p className="text-sm opacity-90">Total Bookings</p>
            <h2 className="text-3xl font-bold mt-2">{bookings.length}</h2>
          </div>


          {/* Pending */}
          <div className="rounded-2xl p-6 shadow bg-linear-to-r from-orange-400 to-orange-500 text-white">
            <p className="text-sm opacity-90">Pending</p>
            <h2 className="text-3xl font-bold mt-2">{pendingData.length}</h2>
          </div>


          {/* Total Payment */}
          <div className="rounded-2xl p-6 shadow bg-linear-to-r from-emerald-500 to-emerald-600 text-white">
            <p className="text-sm opacity-90">Total Payment</p>
            <h2 className="text-3xl font-bold mt-2">৳ {totalPayment}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;