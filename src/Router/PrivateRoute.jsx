import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthProvider';
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Loading />;

  if (user && user.email) {
    return children;
  }

  // Redirect to login, preserve intended route
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
