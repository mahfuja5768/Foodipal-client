
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();
  // console.log(location)

  if (loading) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-ring loading-lg text-red"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
