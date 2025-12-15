const DashboardHome = () => {
  const stats = {
    totalBookings: 12,
    pending: 4,
    earnings: 18500,
  };

  return (
    <div className="p-6 bg-gray-50 h-[70vh]">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Dashboard</h1>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Bookings */}
        <div className="rounded-2xl p-6 shadow bg-linear-to-r from-blue-500 to-blue-600 text-white">
          <p className="text-sm opacity-90">Total Bookings</p>
          <h2 className="text-3xl font-bold mt-2">{stats.totalBookings}</h2>
        </div>


        {/* Pending */}
        <div className="rounded-2xl p-6 shadow bg-linear-to-r from-orange-400 to-orange-500 text-white">
          <p className="text-sm opacity-90">Pending</p>
          <h2 className="text-3xl font-bold mt-2">{stats.pending}</h2>
        </div>


        {/* Earnings */}
        <div className="rounded-2xl p-6 shadow bg-linear-to-r from-emerald-500 to-emerald-600 text-white">
          <p className="text-sm opacity-90">Earnings</p>
          <h2 className="text-3xl font-bold mt-2">৳ {stats.earnings}</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;