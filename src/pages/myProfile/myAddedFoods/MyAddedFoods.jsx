import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyAddedFood from "./MyAddedFood";
import useAuth from "../../../hooks/useAuth";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../../hooks/Button";

const MyAddedFoods = () => {
  const bg = "https://i.ibb.co/PDhh91Q/img-19.png";
  const { user } = useAuth();
  // const axiosSecure = useAxiosSecure();

  const url = `https://foodie-pal-server.vercel.app/added-food?email=${user?.email}`;
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["addedFood"],
    queryFn: async () => {
      const data = await axios.get(url).then((res) => {
        // console.log(res.data);
        return res.data;
      });
      return data;
    },
  });
  if (isPending) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-ring loading-lg  text-red"></span>
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
      {!data.length ? (
        <div className="flex justify-center items-center flex-col">
          <p className="text-3xl text-red font-bold mb-5">
            You have not added food yet!
          </p>
          <Link to="/addAFood">
            <Button>Go To Add Food</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data?.map((food) => (
            <MyAddedFood key={food._id} food={food}></MyAddedFood>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAddedFoods;
