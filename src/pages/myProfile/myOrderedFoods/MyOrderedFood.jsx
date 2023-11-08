import axios from "axios";
import Button from "../../../hooks/Button";
import Swal from "sweetalert2";

const MyOrderedFood = ({ food, refetch }) => {
  const { _id, foodName, foodImage, foodCategory, price, count } = food;
  console.log(foodCategory)

  const handleDelete = () => {
    // console.log();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/order-foods/${_id}`)
          .then(() => {
            Swal.fire("Deleted!", "Food has been deleted.", "success");
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className=" flex gap-3 shadow-xl">
       <div className="md:w-[350px] w-[200px] border-2 border-red rounded-l-3xl">
        {
          foodImage? <img
          src={foodImage}
          className="w-full h-[300px] rounded-l-3xl"
          alt=""
        /> : <p  className="w-full h-[300px] flex items-center justify-center">No Image</p>
        }
      </div>
      <div className="px-6 py-4 border-2 border-red rounded-r-3xl">
        <h3 className="text-2xl font-semibold my-2">
          Name: <span className="text-red font-bold">{foodName}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold  my-2">
          Category: <span className="text-red font-bold">{foodCategory}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold  my-2">
          Price: <span className="text-red font-bold">${price}</span>{" "}
        </h3>
        <h3 className="text-2xl font-semibold pb-2 my-2">
          <span className="text-red font-bold">{count}</span> times Ordered.{" "}
        </h3>
        <button
          onClick={handleDelete}
          className="bg-red font-bold hover:text-red  hover:bg-transparent hover:border-4 hover:border-red text-white btn rounded-full normal-case border-4 border-red"
        >
          Delete Now
        </button>
      </div>
    </div>
  );
};

export default MyOrderedFood;
