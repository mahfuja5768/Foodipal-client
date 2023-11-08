import { Link } from "react-router-dom";
import Button from "../../../hooks/Button";
import Modal from "../../../components/Modal";

const MyAddedFood = ({ food, refetch }) => {
  const { _id, foodName, foodCategory, price, count, foodImage } = food;
  console.log(food);

  return (
    <div className="px-4">
      <div className=" flex gap-3 ">
        <div className="md:w-[250px] w-[200px] border-2 border-red rounded-l-3xl">
          {foodImage ? (
            <img src={foodImage} className="w-full h-[300px] " alt="" />
          ) : (
            <p className="w-full h-[300px] flex items-center justify-center">
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
          <Link
            className="w-full"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <Button>Update Now</Button>
          </Link>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Modal food={food} refetch={refetch}></Modal>
    </div>
  );
};

export default MyAddedFood;
