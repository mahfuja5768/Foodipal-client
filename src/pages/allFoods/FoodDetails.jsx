import { Link, useLoaderData } from "react-router-dom";
import Button from "../../hooks/Button";

const FoodDetails = () => {
  const [foodDetails] = useLoaderData();
  //   console.log(Object.keys(foodDetails).join(","));
  //    console.log(foodDetails)
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    price,
    count,
    quantity,
    madeBy,
    foodOrigin,
    description,
  } = foodDetails;
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-12 grid grid-cols-3 gap-5 items-center">
      <div className=" col-span-2">
        <img src={foodImage} className="h-[500px] w-full rounded-xl" alt="" />
      </div>
      <div>
      <div className="col-span-1 space-y-5 p-5 border-2 border-red rounded-xl">
        <h3 className="text-2xl font-semibold">
          Name: <span className="text-red font-bold">{foodName}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
          Category: <span className="text-red font-bold">{foodCategory}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
          Price: <span className="text-red font-bold">${price}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
        Made By: <span className="text-red font-bold">{madeBy}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
        Origin: <span className="text-red font-bold">{foodOrigin}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold pb-2">
        Description: <span className="text-red font-bold">{description}</span>{" "}
        </h3>
        <div className="w-full">
          <Link to={`/orderFood/${_id}`}>
            <Button>Order</Button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FoodDetails;