import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loading";
import Swal from 'sweetalert2'

const MyBookings = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: bookings = [], isLoading, refetch } = useQuery({
    queryKey: ['myBookings', user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings?email=${user.email}`);
      return res.data;
    }
  });
  // console.log(bookings);

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Cancel this booking?",
      text: "This decoration service booking will be cancelled.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel booking"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/bookings/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Booking Cancelled",
                text: "Your decoration service booking has been successfully cancelled.",
                icon: "success"
              });
              refetch();
            }
          })
          
      }
    });
  };

  const handlePayment = async booking => {
    const paymentInfo = {
      servicePrice: booking.servicePrice,
      bookingId: booking._id,
      serviceName: booking.serviceName,
      userEmail: booking.userEmail,
    }
    
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);
    window.location.assign(res.data.url);
  };

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
              <th>Price</th>
              <th>Status</th>
              {/* <th>Payment</th> */}
              <th>Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{booking.serviceName}</td>
                <td>{booking.serviceDate}</td>
                <td>{`${booking.servicePrice}` + '/- BDT'}</td>

                {/* Status */}
                <td>
                  <span className={`badge ${booking.status === "pending"
                    ? "badge-warning"
                    : "badge-success"
                    }`}>
                    {booking.status}
                  </span>
                </td>

                {/* Payment */}
                {/* <td>
                  {
                    booking.paid ?
                      <span className='badge badge-success'>
                        Paid
                      </span> :
                      <span className='badge badge-error'>
                        Unpaid
                      </span>
                  }
                </td> */}

                {/* Action */}
                <td className="space-x-2">
                  {booking.paid === false ? (
                    <>
                      <button onClick={() => handlePayment(booking)} className="btn-main btn-sm">Pay</button>
                      <button onClick={() => handleCancelBooking(booking._id)} className="btn-two btn-sm btn-error">Cancel</button>
                    </>
                  ) : (
                    <span className="font-medium badge badge-outline badge-success">Paid</span>
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
