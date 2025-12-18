import React from 'react';
import useAuth from '../../Hooks/useAuth';

const MyProfile = () => {

  const { user } = useAuth();

  return (
    <div className="p-6 bg-gray-50 h-[70vh]">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Profile</h1>

      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="h-28 bg-linear-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Info */}
        <div className="relative p-6">
          <div className="flex justify-center -mt-16 mb-4">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow"
            />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">{user?.displayName}</h2>
            <p className="text-gray-500">{user.email}</p>
            <span className="inline-block mt-2 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600">
              {user.role}
            </span>
          </div>

          {/* Details */}
          <div className="mt-6 border-t border-t-gray-400 pt-4 space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Account Type</span>
              <span className="font-medium">Standard User</span>
            </div>
            <div className="flex justify-between">
              <span>Status</span>
              <span className="font-medium text-green-600">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;