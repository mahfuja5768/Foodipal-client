import { useQuery } from "@tanstack/react-query";
import Title from "../../../hooks/Title";
import MyOrderedFood from './MyOrderedFood';
import useAuth from "../../../hooks/useAuth";


const MyOrderedFoods = () => {
    const { user } = useAuth();
    const { data, isPending, isError, error ,refetch} = useQuery({
      queryKey: ["orderedFoods"],
      queryFn: async () => {
        const url = `http://localhost:5000/order-foods?email=${user?.email}`;
  
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
          <Title>Your Ordered Foods</Title>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data?.map((food) => (
            <MyOrderedFood key={food._id} food={food} refetch={refetch}></MyOrderedFood>
          ))}
        </div>
      </div>
    );
};

export default MyOrderedFoods;