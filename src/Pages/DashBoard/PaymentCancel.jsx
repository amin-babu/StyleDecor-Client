import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div className='bg-gray-100'>
      <div className="h-[90vh] flex items-center justify-center px-4">
        <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <FaTimesCircle className="text-6xl text-red-500" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Payment Unsuccessful
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            Your payment was cancelled or failed. No money has been charged.
            Please try again if you wish to complete the booking.
          </p>

          {/* Info Box */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-700">
              Your booking is still pending and has not been confirmed.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <Link
              to="/dashboard/my-booking"
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              Try Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;