import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyAddedFood from "./MyAddedFood";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyAddedFoods = () => {
  const bg = "https://i.ibb.co/PDhh91Q/img-19.png";
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const url = `http://localhost:5000/added-food?email=${user?.email}`;
  const { data, isError, error, isPending, refetch } = useQuery({
    queryKey: ["addedFood"],
    queryFn: async () => {
      const data = await axiosSecure.get(url).then((res) => {
        console.log(res.data);
        return res.data;
      });
      return data;
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
