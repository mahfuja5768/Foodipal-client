import { Link } from "react-router-dom";
import Button from "../../hooks/Button";
import { motion } from "framer-motion";

const AllFood = ({ food }) => {
  // console.log(Object.keys(food).join(","));
  const { _id, foodName, foodImage, foodCategory, price, quantity} = food;
  //   console.log({foodName});
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <div className="  rounded-bl-3xl">
        <div className=" h-[300px] border-2 relative border-red rounded-t-full">
          {
            foodImage ? <img
            src={foodImage}
            className="h-full w-full rounded-t-full"
            alt=""
          /> : <p className="flex justify-center items-center mt-12 text-red">No Image</p>
          }
        </div>
        <div className="  space-y-4 px-12 py-4 h-[350px] border-2 border-red rounded-b-full">
          <h3 className="text-2xl font-semibold">
            Name: <span className="text-red font-bold">{foodName}</span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold ">
            Category: <span className="text-red font-bold">{foodCategory}</span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold ">
          Available Quantity: <span className="text-red font-bold">{quantity}</span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold ">
            Price: <span className="text-red font-bold">${price}</span>{" "}
          </h3>
          <div className="w-1/2 mx-auto">
            <Link to={`/details/${_id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllFood;
