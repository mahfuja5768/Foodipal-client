import { Link, useLoaderData } from "react-router-dom";
import Button from "../../hooks/Button";

const FoodDetails = () => {
  const [foodDetails] = useLoaderData();
  //   console.log(Object.keys(foodDetails).join(","));
     console.log(foodDetails)
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    price,
    name,
    quantity,
    madeBy,
    foodOrigin,
    description,
  } = foodDetails || {};
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-12 grid md:grid-cols-3 gap-5 items-center">
      <div className=" md:col-span-2 h-[500px]">
        {foodImage ? (
            <img src={foodImage} className="w-full h-full rounded-3xl" alt="" />
          ) : (
            <p className="w-full h-full flex items-center justify-center">
              No Image
            </p>
          )}
      </div>
      <div>
        <div className="border-2 border-red rounded-xl  space-y-2 p-5">
          <div className="md:col-span-1 space-y-5 ">
            <h3 className="text-2xl font-semibold">
              Name: <span className="text-red font-bold">{foodName}</span>{" "}
            </h3>
            <h3 className="text-2xl font-semibold ">
              Category:{" "}
              <span className="text-red font-bold">{foodCategory}</span>{" "}
            </h3>
            <h3 className="text-2xl font-semibold ">
              Price: <span className="text-red font-bold">${price}</span>{" "}
            </h3>
            {madeBy ? (
              <h3 className="text-2xl font-semibold ">
                Made By: <span className="text-red font-bold">{madeBy}</span>{" "}
              </h3>
            ) : (
              <h3 className="text-2xl font-semibold ">
                Made By: <span className="text-red font-bold">{name}</span>{" "}
              </h3>
            )}
            <h3 className="text-2xl font-semibold ">
              Origin: <span className="text-red font-bold">{foodOrigin}</span>{" "}
            </h3>
            <h3 className="text-2xl font-semibold pb-2">
              Description:{" "}
              <span className="text-red font-bold">{description}</span>{" "}
            </h3>
          </div>
          <div className="w-full  justify-center flex">
            <Link className="w-full" to={`/orderFood/${_id}`}>
              <Button className="w-full">Order</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
