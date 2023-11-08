import { Link } from "react-router-dom";
import bg from "../assets/images/bg3.jpg";
import Button from "../hooks/Button";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-t from-black to-transparent px-4">
        <div className=" lg:col-span-3 max-w-[1280px] mx-auto text-white py-[250px]">
          <h1 className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
            Welcome to Foodie Pal
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold">
            Discover, Savor, and Manage Your Culinary Experience
          </h2>
          <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#bebebe]">
            Our restaurant is thrilled to introduce our new online platform,
            specially designed for your convenience. As a restaurant manager, we
            understand the importance of providing a seamless experience for our
            customers and enhancing your ability to explore our culinary
            offerings.
          </p>
         <div className="w-1/5 my-6">
         <Link to="/moreEvents">
            {" "}
            <Button className="btn mt-1 mb-5 normal-case bg-gray-200 btn-outline">
              <span>Explore Foods</span>
            </Button>
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
