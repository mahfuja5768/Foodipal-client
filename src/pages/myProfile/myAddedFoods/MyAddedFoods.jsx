import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyAddedFood from "./MyAddedFood";
import useAuth from "../../../hooks/useAuth";
import bg from "../../../assets/images/img-19.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../ProviderContext/AuthProvider";

const MyAddedFoods = async () => {
  // const { user } = useAuth();
  const { user } = useContext(AuthContext);
  console.log(user.email)
  // const [data, setData]= useState()
  const axiosSecure = useAxiosSecure();

  const url = `http://localhost:5000/added-food?email=${user?.email}`;
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["addedFoods"],
    queryFn: async () => {
      const data = await axios
        .get(url, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          return res.data;
        });

      // const data = await axiosSecure
      //   .get(url)
      //   .then((res) => {
      //     console.log(res.data);
      //     return res.data;
      //   })
      //   .catch((err) => console.log(err.message));
      // return data;
    },
  });
  if (isPending) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-ring  text-red"></span>
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div
      className="max-w-[1280px] mx-auto px-4 my-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <Title>Your Added Foods</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data?.map((food) => (
          <MyAddedFood
            key={food._id}
            food={food}
            refetch={refetch}
          ></MyAddedFood>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoods;
