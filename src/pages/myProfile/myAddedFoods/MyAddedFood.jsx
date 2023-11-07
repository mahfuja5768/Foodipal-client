import { Link } from "react-router-dom";
import Button from "../../../hooks/Button";

const MyAddedFood = ({ food }) => {
  const { _id, foodName, foodImage, foodCategory, price, count } = food;
  return (
    <div className=" flex gap-3">
      <div>
        <img
          src={foodImage}
          className="w-full h-[300px] border-2 border-red "
          alt=""
        />
      </div>
      <div className="px-12 py-4 border-2 border-red grid grid-cols-2 gap-3">
        <h3 className="text-2xl font-semibold">
          Name: <span className="text-red font-bold">{foodName}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
          Category: <span className="text-red font-bold">{foodCategory}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold ">
          Price: <span className="text-red font-bold">${price}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold pb-6">
          <span className="text-red font-bold">{count}</span> times Ordered.{" "}
        </h3>
        <Link className="w-full" to={`/updateFood/${_id}`}>
          {" "}
          <Button>Update Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default MyAddedFood;
