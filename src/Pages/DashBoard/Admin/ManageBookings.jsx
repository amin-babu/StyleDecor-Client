import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Loading from '../../../Components/Loading';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ManageBookings = () => {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedDecorator, setSelectedDecorator] = useState('');

  const axiosSecure = useAxiosSecure();
  const { data: manageBooking = [], isLoading, } = useQuery({
    queryKey: ['manage-bookings'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/manage-bookings`);
      return res.data;
    }
  });

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    }
  });

  const decorators = users.filter(user => user.role === 'decorator');


  const handleAssignDecorator = async () => {
    if (!selectedDecorator) {
      Swal.fire("Please select a decorator");
      return;
    }

    const assignInfo = {
      decoratorId: selectedDecorator,
      status: "assigned"
    };

    const res = await axiosSecure.patch(
      `/manage-bookings/${selectedBooking._id}`,
      assignInfo
    );

    if (res.data.modifiedCount > 0) {
      refetch();
      setSelectedBooking(null);
      setSelectedDecorator('');
      document.getElementById("assign_modal").close();
      Swal.fire("Assigned!", "Decorator assigned successfully", "success");
    };

  };

  if (isLoading) {
    return <Loading />;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Bookings</h2>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table table-zebra">
          <thead className='bg-gray-100'>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Service</th>
              <th>Date</th>
              <th>Location</th>
              <th>Paid</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {manageBooking.map((booking, index) => (
              <tr key={booking._id}>

                <td>{index + 1}</td>

                <td>
                  <div>
                    <p className="font-semibold">{booking.userName}</p>
                    <p className="text-sm text-gray-500">
                      {booking.userEmail}
                    </p>
                  </div>
                </td>

                <td>{booking.serviceName}</td>
                <td>{booking.serviceDate}</td>
                <td>{booking.location}</td>

                <td>
                  {booking.paid ? (
                    <span className="badge badge-success">Paid</span>
                  ) : (
                    <span className="badge badge-error">Not Paid</span>
                  )}
                </td>

                <td>
                  {
                    booking.status === 'assigned' || booking.status === 'success' ?
                      <div className="badge badge-success">Success</div> :
                      <div className="badge badge-warning">Pending</div>
                  }
                </td>

                <td>
                  {
                    booking.status === 'assigned' ?
                      <div className="badge badge-outline badge-success">Assigned</div> :
                      <button
                        className="btn btn-sm btn-primary shadow-none"
                        disabled={!booking.paid}
                        onClick={() => {
                          setSelectedBooking(booking);
                          document.getElementById("assign_modal").showModal();
                        }}
                      >
                        Assign Decorator
                      </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* decorator modal */}
      <dialog id="assign_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">
            Assign Decorator
          </h3>

          <p className="text-sm mb-2">
            Service: <span className="font-semibold">{selectedBooking?.serviceName}</span>
          </p>

          <select
            onChange={(e) => setSelectedDecorator(e.target.value)}
            className="select select-bordered w-full mb-4">
            <option disabled selected>
              Select Decorator
            </option>
            {decorators.map((decorator) => (
              <option key={decorator._id} value={decorator._id}>
                {decorator.displayName}
              </option>
            ))}
          </select>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
            <button
              method="dialog"
              onClick={handleAssignDecorator}
              className="btn btn-success">
              Assign
            </button>
          </div>
        </div>
      </dialog>

    </div>
  );
};

export default ManageBookings;
