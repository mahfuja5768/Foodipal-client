import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ProviderContext/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://foodie-pal-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("err tracked in the interceptor", err.response);
        if (err.response.status === 401 || err.response.status === 403) {
          console.log("log out the user..");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .then();
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
