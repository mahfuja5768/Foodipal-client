import { Link } from "react-router-dom";
import Button from "../../hooks/Button";

const TopFood = ({ food }) => {
//   console.log(Object.keys(food).join(","));
  const { _id, foodName, foodImage, foodCategory, price, count } = food;
  return (
    <div className="  rounded-bl-3xl">
      <div>
        <img
          src={foodImage}
          className="w-full h-[300px] border-2 border-red rounded-t-full"
          alt=""
        />
      </div>
      <div className=" space-y-4 px-12 py-4 md:h-[320px] h-[350px] border-2 border-red rounded-b-full">
        <h3 className="text-2xl font-semibold">
          Name: <span className="text-red font-bold">{foodName}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
          Category: <span className="text-red font-bold">{foodCategory}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
          Price: <span className="text-red font-bold">${price}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold">
          <span className="text-red font-bold">{count}</span> times Ordered.{" "}
        </h3>
        <div className="w-1/2 mx-auto">
          <Link to={`/details/${_id}`}>
            {" "}
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
