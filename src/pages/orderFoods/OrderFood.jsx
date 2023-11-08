import { useLoaderData, useNavigate } from "react-router-dom";
import Title from "../../hooks/Title";
import bg1 from "../../assets/add.png";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const OrderFood = () => {
  const bg = "https://i.ibb.co/PDhh91Q/img-19.png";
  const { user } = useAuth();
  const [foodDetails] = useLoaderData();
  //   console.log(Object.keys(foodDetails).join(","));
  const {
    _id,
    foodName,
    foodImage,
    foodCategory,
    price,
    count,
    quantity,
    email,
  } = foodDetails;
  const goTo = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const date = form.get("date");
    if (email === user.email) {
      Swal.fire({
        title: "Error!",
        text: "You can not buy your added food!",
        icon: "error",
        confirmButtonText: "Done",
      });
      return;
    }
    if (quantity > 0) {
      const orderFoodInfo = {
        email: user?.email,
        name: user?.displayName,

        date,
        foodName,
        foodImage,
        foodCategory,
        price,
        count,
      };
      axios
        .put(`https://foodie-pal-server.vercel.app/update-quantity/${_id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err.message));

      axios
        .post("https://foodie-pal-server.vercel.app/order-foods", orderFoodInfo)
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: "Successfully food purchased!",
            icon: "success",
            confirmButtonText: "Done",
          });
          goTo("/allFoods");
          formValues.reset();
        })
        .catch((err) => console.log(err.message));
    } else {
      return Swal.fire({
        title: "error!",
        text: "Food is not available!",
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <div className="py-8 max-w-[1280px] mx-auto px-5 lg:px-12">
      <Title> Welcome To Order Page,</Title>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
        <div className="lg:col-span-2">
          <img src={bg1} className="w-1/2" alt="" />
        </div>
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className=" space-y-5">
            <div className="form-control">
              <label className="mb-2 text-lg font-medium">Food Name:</label>
              <label>
                <input
                  defaultValue={foodName}
                  type="text"
                  name="foodName"
                  placeholder="Enter your  food name
                    "
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                  required
                  readOnly
                />
              </label>
            </div>
            <div className="form-control my-5">
              <label className="mb-2 text-lg font-medium">Food Quantity:</label>
              <label>
                <input
                  defaultValue={quantity}
                  type="number"
                  name="quantity"
                  placeholder="quantity"
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                  required
                  readOnly
                />
              </label>
            </div>
            <div className="form-control my-5">
              <label className="mb-2 text-lg font-medium">Food Price:</label>
              <label>
                <input
                  defaultValue={`${price}`}
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                  required
                  readOnly
                />
              </label>
            </div>
            <div className="form-control my-5">
              <label className="mb-2 text-lg font-medium">Date:</label>
              <label>
                <input
                  defaultValue={`${price}`}
                  type="date"
                  name="date"
                  placeholder="date"
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control my-5">
              <label className="mb-2 text-lg font-medium">Buyer Email:</label>
              <label>
                <input
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                  required
                  readOnly
                />
              </label>
            </div>
            <div className="form-control my-5">
              <label className="mb-2 text-lg font-medium">Buyer Name:</label>
              <label>
                <input
                  defaultValue={user?.displayName}
                  type="email"
                  name="name"
                  placeholder="Enter your email"
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                  required
                  readOnly
                />
              </label>
            </div>

            <input
              type="submit"
              className="w-full cursor-pointer hover:bg-hoverText bg-secondary text-white my-2 rounded-lg py-4 font-bold"
              value="  Purchase now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
