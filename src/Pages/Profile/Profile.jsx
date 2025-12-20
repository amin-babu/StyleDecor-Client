import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Components/Loading';

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userInfo = {}, isLoading: userLoading } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  console.log(userInfo);

  if (userLoading) {
    return <Loading />;
  };

  return (

    <div className="w-full max-w-3xl mx-auto px-4 pt-24 pb-10">
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
              <img src={userInfo?.photoURL} alt="profile" />
            </div>
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold mt-2">{userInfo?.displayName}</h2>
          <p className="text-sm opacity-70">{userInfo?.email}</p>
          <div className="badge badge-primary mt-2 px-4 py-3 text-sm">{userInfo?.role}</div>

          {/* Role */}
          <button className="inline-block mt-2 px-4 py-1 text-sm rounded-full bg-blue-100 text-primary">Joined: {userInfo?.createdAt?.slice(0, 10)}</button>
        </div>
      </div>
    </div>
  );

};

export default Profile;