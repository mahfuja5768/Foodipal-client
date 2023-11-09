import { Link } from "react-router-dom";

const MyAddedFood = ({ food }) => {
  const { _id, foodName, foodCategory, price, count, foodImage } = food;

  return (
    <div className="px-4">
      <div className=" flex gap-3 ">
        <div className="md:w-[250px] w-[200px] border-2 border-red rounded-l-3xl">
          {foodImage ? (
            <img src={foodImage} className="w-full h-full rounded-l-3xl" alt="" />
          ) : (
            <p className="w-full h-full flex items-center justify-center">
              No Image
            </p>
          )}
        </div>
        <div className="px-12 py-4 border-2 border-red rounded-r-3xl">
          <h3 className="text-2xl font-semibold my-2">
            Name: <span className="text-red font-bold">{foodName}</span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold my-2">
            Category: <span className="text-red font-bold">{foodCategory}</span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold my-2">
            Price: <span className="text-red font-bold">${price}</span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold pb-3 my-2">
            <span className="text-red font-bold">{count}</span> times Ordered.{" "}
          </h3>
          <Link to={`/updateAddedFood/${_id}`} className="w-full">
            <button className=" bg-red w-full font-bold hover:text-red  hover:bg-transparent hover:border-4 hover:border-red text-white btn rounded-full normal-case border-4 border-red">
              Update Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyAddedFood;
