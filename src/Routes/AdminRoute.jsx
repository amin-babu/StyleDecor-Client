import React from 'react';
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";
import Loading from '../Components/Loading';
import Forbidden from '../Pages/Others/Forbidden';

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <Loading />;
  };

  if (role !== 'admin') {
    return <Forbidden />
  }

  return children;
};

export default AdminRoute;