import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyAddedFood from "./MyAddedFood";
import useAuth from "../../../hooks/useAuth";
import bg from "../../../assets/images/img-19.png";
import { useEffect, useState } from "react";
import axios from "axios";

const MyAddedFoods = () => {
  const { user } = useAuth();
  // const [data, setData]= useState()
  const { data, isPending, isError, error , refetch} = useQuery({
    queryKey: ["addedFoods"],
    queryFn: async () => {
      const url = `http://localhost:5000/added-food?email=${user?.email}`;

      const data = await fetch(url);
      return await data.json();
    },
  });

  if (isPending) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-ring  text-success"></span>
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  // const url = `http://localhost:5000/added-food?email=${user?.email}`;
  // useEffect(()=>{
  //   axios.get(url)
  //   .then(res=>{
  //     setData(res.data)
  //   })
  // }, [url])

  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24"  style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover", 
      backgroundPosition: "center", 

    }}>
      <div>
        <Title>Your Added Foods</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data?.map((food) => (
          <MyAddedFood key={food._id} food={food} refetch={refetch}></MyAddedFood>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoods;
