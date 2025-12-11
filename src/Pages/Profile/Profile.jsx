import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    
    <div className="w-full max-w-3xl mx-auto p-4 ">
      {/* Cover */}
      <div className="w-full h-40 rounded-xl overflow-hidden -z-20 relative">
        <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60" alt="cover" className="w-full h-full object-cover" />
      </div>

      {/* Profile Card */}
      <div className="card bg-base-100 shadow-lg p-6 -mt-12 rounded-xl -z-10 relative">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 -mt-10">
              <img src={user?.photoURL} alt="profile" />
            </div>
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold mt-2">{user?.displayName}</h2>
          <p className="text-sm opacity-70">{user?.email}</p>
          <div className="badge badge-primary mt-2 px-4 py-3 text-sm">user</div>

          {/* Edit Button */}
          <button className="btn-main mt-4">Edit Profile</button>
        </div>
      </div>
    </div>
  );

};

export default Profile;