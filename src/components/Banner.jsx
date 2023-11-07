import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import bg1 from "../assets/images/bg2.jpg";
import bg2 from "../assets/images/bannner.jpg";
import bg3 from "../assets/images/bg3.jpg";
import Button from "../hooks/Button";

const Banner = () => {
  return (
    <div>
      <div className=" w-full h-[90vh] mb-12 text-center lg:text-start ">
        <div className="relative w-full">
          <img src={bg2} className="w-full" alt="banner-png" />
          <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 bg-gradient-to-b from-[#121212] h-full">
            <div className="hero-content text-white max-w-[1280px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4">
                <div className=" lg:col-span-3">
                  <h1 className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
                    Welcome to Foodie Pal
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    Discover, Savor, and Manage Your Culinary Experience
                  </h2>
                  <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#bebebe]">
                    Our restaurant is thrilled to introduce our new online
                    platform, specially designed for your convenience. As a
                    restaurant manager, we understand the importance of
                    providing a seamless experience for our customers and
                    enhancing your ability to explore our culinary offerings.
                  </p>
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
        </div>
      </div>
    </div>
  );
};

export default Banner;
