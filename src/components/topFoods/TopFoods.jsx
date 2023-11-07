import { useQuery } from "@tanstack/react-query";
import TopFood from "./TopFood";
import Title from "../../hooks/Title";
import Button from "../../hooks/Button";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["topFoods"],
    queryFn: async () => {
      const data = await fetch("http://localhost:5000/top-foods");
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
    <div className="max-w-[1280px] mx-auto px-4">
      <div>
       <Title>Top Ordered Foods</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {data?.map((food) => (
        <TopFood key={food._id} food={food}></TopFood>
      ))}
      </div>
      <div className="flex justify-center my-12">
      <Link to='/allFoods'><Button>See All Food</Button></Link>
      </div>
    </div>
  );
};

export default TopFoods;
