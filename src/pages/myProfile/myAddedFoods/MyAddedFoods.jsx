import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyAddedFood from "./MyAddedFood";
import useAuth from "../../../hooks/useAuth";

const MyAddedFoods = () => {
  const { user } = useAuth();
  const { data, isPending, isError, error } = useQuery({
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
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24">
      <div>
        <Title>Your Added Foods</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data?.map((food) => (
          <MyAddedFood key={food._id} food={food}></MyAddedFood>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoods;
