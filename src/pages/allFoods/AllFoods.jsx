import Title from "../../hooks/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import AllFood from "./AllFood";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../../hooks/Button";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const AllFoods = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="text-center my-8">
        <span className="loading loading-ring loading-lg text-red"></span>
      </div>
    );
  }
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState();
  console.log(foodName);
  const foodNames = [
    "All",
    "Lasagna",
    "Chicken Tikka Masala",
    "Ramen",
    "Burger",
    "Pho",
    "Sushi Rolls",
    "Mango Sticky Rice",
    "Pad Thai",
  ];
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const { count } = useLoaderData();

  //   console.log(count);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  // const pages = [...Array(numberOfPages).keys()];

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }

  const handleItemsPerPage = (e) => {
    // console.log(e.target.value);
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  let url;
  if (foodName && foodName !== "All") {
    url = `https://foodie-pal-server.vercel.app/all-foods?&page=${currentPage}&size=${itemsPerPage}&foodName=${foodName}`;
  } else if (foodName === "All") {
    // url = "https://foodie-pal-server.vercel.app/all-foods";
    url = `https://foodie-pal-server.vercel.app/all-foods?&page=${currentPage}&size=${itemsPerPage}`;
  } else {
    // url = "https://foodie-pal-server.vercel.app/all-foods";
    url = `https://foodie-pal-server.vercel.app/all-foods?&page=${currentPage}&size=${itemsPerPage}`;
  }
  useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setFoods(res.data);
    });
  }, [foodName, currentPage, itemsPerPage]);

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <div>
        <Title>All Foods</Title>
      </div>
      <div>
        <div className="flex  lg:flex-row flex-col gap-5 items-center justify-center my-12">
          <div className="form-control ">
            <h2 className="text-red text-3xl mb-4 font-bold">Search your food by name:</h2>
            <div className="input-group">
              <select
                onChange={(e) => setFoodName(e.target.value)}
                className="select select-bordered me-2 rounded-2xl border-2 border-red text-black"
              >
                {foodNames.map((food, idx) => (
                  <option className="text-black" key={idx}>
                    {food}
                  </option>
                ))}
              </select>
              <Button>Go</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {foods?.map((food) => (
          <AllFood key={food._id} food={food}></AllFood>
        ))}
      </div>
      <div className="flex my-12 justify-center items-center gap-2 lg:gap-4 ">
        <button
          className="bg-red text-sm md:text-lg border-none hover:text-red hover:bg-transparent text-white font-bold btn  rounded-full"
          onClick={handlePrev}
        >
          <FaAngleLeft></FaAngleLeft>
        </button>
        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "font-bold btn text-sm md:text-lg rounded-full border-2 border-red"
                : "text-sm md:text-lg font-bold btn rounded-full border-2 border-transparent"
            }
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className=" hover:text-red border-none hover:bg-transparent bg-red text-white font-bold btn text-sm md:text-lg rounded-full"
        >
          <FaAngleRight></FaAngleRight>
        </button>

        <select className="border-2 border-red p-2 font-bold text-black"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">25</option>
        </select>
      </div>
    </div>
  );
};

export default AllFoods;
