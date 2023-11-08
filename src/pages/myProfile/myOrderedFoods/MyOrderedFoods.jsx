import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyOrderedFood from "./MyOrderedFood";
import useAuth from "../../../hooks/useAuth";

const MyOrderedFoods = () => {
  const { user } = useAuth();
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["orderedFoods"],
    queryFn: async () => {
      const url = `https://foodie-pal-server.vercel.app/order-foods?email=${user?.email}`;

      // const data = await fetch(url, {
      //   credentials: "include",
      // });
      const data = await fetch(url);
      return data.json();
    },
  });

  if (isPending) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-ring text-red"></span>
      </div>
    );
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24">
      <div>
        <Title>Your Ordered Foods</Title>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data?.map((food) => (
          <MyOrderedFood
            key={food._id}
            food={food}
            refetch={refetch}
          ></MyOrderedFood>
        ))}
      </div>
    </div>
  );
};

export default MyOrderedFoods;
