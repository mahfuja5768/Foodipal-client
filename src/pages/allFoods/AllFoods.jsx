import Title from "../../hooks/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import AllFood from "./AllFood";
import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [foodName, setFoodName] = useState();
  const [sort, setSort] = useState();
  // console.log(sort);
  const foodNames = [
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
  const pages = [...Array(numberOfPages).keys()];

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

  //   let price={}

  //   const url = `http://localhost:5000/all-foods?&page=${currentPage}&size=${itemsPerPage}&sortField=${foods.price}&sortOrder=${sort}`;
  const url = `http://localhost:5000/all-foods?&page=${currentPage}&size=${itemsPerPage}`;
  useEffect(() => {
    axios.get(url).then((res) => {
      //   console.log(res.data);
      setFoods(res.data);
    });
  }, [foodName, currentPage, itemsPerPage, sort]);

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <div>
        <Title>All Foods</Title>
      </div>
      <div>
        <div className="flex lg:justify-between lg:flex-row flex-col gap-5 items-center justify-center my-12">
          <div className="form-control ">
            <div className="input-group">
              <select
                onChange={(e) => setFoodName(e.target.value)}
                className="select select-bordered"
              >
                {foodNames.map((food, idx) => (
                  <option key={idx}>{food}</option>
                ))}
              </select>
              <button className="btn">Go</button>
            </div>
          </div>
          <div className="form-control ">
            <h3>Sort by price</h3>
            <div className="input-group">
              <select
                onChange={(e) => setSort(e.target.value)}
                className="select select-bordered"
              >
                <option value="dsc">High</option>
                <option value="asc">Low</option>
              </select>
              <button className="btn">Go</button>
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
          className="bg-red text-sm md:text-lg hover:text-red hover:bg-transparent text-white font-bold btn  rounded-full"
          onClick={handlePrev}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={
              currentPage === page
                ? "bg-red text-white hover:text-red hover:bg-transparent font-bold btn text-sm md:text-lg rounded-full"
                : "bg-transparent border-4  hover:text-red hover:bg-transparent text-sm md:text-lg border-red font-bold btn rounded-full "
            }
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className=" hover:text-red hover:bg-transparent bg-red text-white font-bold btn text-sm md:text-lg rounded-full"
        >
          Next
        </button>

        <select
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
