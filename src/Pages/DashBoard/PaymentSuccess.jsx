import React from 'react';
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  console.log(sessionId);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (sessionId) {
      axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
        .then(res => {
          console.log(res.data);
        })
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className='bg-gray-100'>
      <div className="h-[90vh] flex items-center justify-center px-4">
        <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-6xl text-green-500" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Successful
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            Your payment has been completed successfully. Your booking is now confirmed.
          </p>

          {/* Info Box */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-green-700">
              You can view all payment details from your payment history.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <div className="flex gap-3 justify-center">
              <Link
                to="/dashboard/my-booking"
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              >
                My Bookings
              </Link>

              <Link
                to="/dashboard/payment-history"
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Payment History
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
