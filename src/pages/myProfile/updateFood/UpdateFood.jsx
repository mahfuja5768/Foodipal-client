// import Lottie from "lottie-react";
import axios from "axios";
import Title from "../../../hooks/Title";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const updateFood = useLoaderData()[0];
  const {
    _id,
    foodName,
    foodCategory,
    price,
    foodOrigin,
    foodImage,
    quantity,
    description,
  } = updateFood;
  console.log(updateFood);
  const { user } = useAuth();

  const goTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const date = form.get("date");
    const foodName = form.get("foodName");
    const foodImage = form.get("foodImage");
    const price = form.get("price");
    const quantity = form.get("quantity");
    const foodOrigin = form.get("foodOrigin");
    const foodCategory = form.get("foodCategory");
    const description = form.get("description");
    formValues.reset();
    const updatedFoodInfo = {
      email: user?.email,
      name: user?.displayName,
      date,
      foodName,
      foodImage,
      foodCategory,
      price,
      quantity,
      foodOrigin,
      description,
    };
    axios
      .put(
        `https://foodie-pal-server.vercel.app/update-food/${_id}`,
        updatedFoodInfo
      )
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Success!",
          text: "Successfully food updated!",
          icon: "success",
          confirmButtonText: "Done",
        });
        formValues.reset();
        goTo("/myAddedFoods");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="py-8 max-w-[1280px] mx-auto px-5 lg:px-12">
      <Title>
        {" "}
        Welcome To <span className="text-red">Food Update </span> Page,
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-8">
        <div className="lg:col-span-2">
          <img src={"https://i.ibb.co/xCr5wNH/giphy-1.gif"} alt="" />
        </div>
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="  ">
            <div className="grid grid-cols-2 gap-6 space-y-5">
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
                  />
                </label>
              </div>
              <div className="form-control my-5">
                <label className="mb-2 text-lg font-medium">
                  Food Quantity:
                </label>
                <label>
                  <input
                    defaultValue={quantity}
                    type="number"
                    name="quantity"
                    placeholder="quantity"
                    className="input input-bordered text-black border-2 border-red rounded-none w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control my-5">
                <label className="mb-2 text-lg font-medium">Food Origin:</label>
                <label>
                  <input
                    defaultValue={foodOrigin}
                    type="text"
                    name="foodOrigin"
                    placeholder="food origin"
                    className="input input-bordered text-black border-2 border-red rounded-none w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control my-5">
                <label className="mb-2 text-lg font-medium">
                  Food Category:
                </label>
                <label>
                  <input
                    defaultValue={foodCategory}
                    type="text"
                    name="foodCategory"
                    placeholder="food category"
                    className="input input-bordered text-black border-2 border-red rounded-none w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control my-5">
                <label className="mb-2 text-lg font-medium">Food Price:</label>
                <label>
                  <input
                    defaultValue={price}
                    type="number"
                    name="price"
                    placeholder="price"
                    className="input input-bordered text-black border-2 border-red rounded-none w-full"
                    required
                  />
                </label>
              </div>
              <div className="form-control my-5">
                <label className="mb-2 text-lg font-medium">Date:</label>
                <label>
                  <input
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
              <div className="form-control  my-5">
                <label className="mb-2 text-lg font-medium">
                  Food photo url:
                </label>
                <input
                  defaultValue={foodImage}
                  type="url"
                  name="foodImage"
                  placeholder="Enter your food photo url"
                  className="input input-bordered  border-2 text-black border-red rounded-none w-full"
                />
              </div>
              <div className="form-control  my-5">
                <label className="mb-2 text-lg font-medium">
                  Food description:
                </label>
                <input
                  defaultValue={description}
                  type="text"
                  name="description"
                  placeholder="description"
                  className="input input-bordered text-black border-2 border-red rounded-none w-full"
                />
              </div>
            </div>
            <input
              type="submit"
              className="w-full mt-5 mx-auto cursor-pointer hover:bg-hoverText bg-secondary text-white my-2 rounded-lg py-4 font-bold"
              value="  Update Food"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateFood;
