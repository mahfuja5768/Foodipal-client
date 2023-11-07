import { FaFacebookF, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import Lottie from "lottie-react";
import logo from "../assets/logo.json";
import bg from "../assets/images/bg3.jpg";

const Footer = () => {
  return (
    <div className=" border-t mt-12 bg-gradient-to-r from-black to-transparent"  style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="bg-gradient-to-b from-black to-transparent px-4">

     
      <footer className="max-w-[1280px] mx-auto text-white ">
     
          <div className=" py-12 md:py-16 items-center  grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="">
              <div className="flex flex-col gap-3 justify-center items-center lg:items-start">
             
                <h3 className="font-bold text-2xl ms-5">Contact Us</h3>
                <p className="flex items-center gap-2 ms-5">
                  <FaPhone className="text-lg text-red"></FaPhone>{" "}
                  <span>+099 222 111</span>
                </p>
                <p className="flex items-center gap-2 ms-5">
                  <FaMailBulk className="text-lg text-red"></FaMailBulk>{" "}
                  <span>@vogueverseapparel.com</span>
                </p>
              </div>
            </div>

            <nav className="">
              <div className=" h-24 flex items-center flex-col">
                <Lottie
                  className="lg:h-full h-24"
                  animationData={logo}
                ></Lottie>
                <h3 className="text-red text-4xl font-bold -mt-6">
                  Foodie Pal
                </h3>
              </div>
              <div className="flex  justify-center  gap-12 my-12">
                <a
                  href="https://www.facebook.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <div className="border-2 rounded-full border-red">
                    <FaFacebookF className="text-3xl p-1"></FaFacebookF>
                  </div>{" "}
                </a>
                <a
                  href="https://www.dribbble.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                >
                  <div className="border-2 rounded-full border-red">
                    <FaLinkedin className="text-3xl p-1"></FaLinkedin>
                  </div>
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="hover:-translate-y-2 duration-300"
                  target="blank"
                ><div className="border-2 rounded-full border-red">
                  <FaTwitter className="text-3xl p-1"></FaTwitter>
              </div>
                </a>
              </div>
            </nav>

            <div className="flex justify-center ">
              <nav className="flex flex-col ">
                <header className="font-bold text-2xl  mb-2">Quick Menu</header>
                <Link to="/" className="link link-hover ps-1 pb-3 font-medium">
                  Home
                </Link>

                <Link
                  className="link link-hover ps-1 pb-3 font-medium "
                  to="/allFoods"
                >
                  All Foods
                </Link>

                <Link
                  className="link link-hover ps-1 pb-3 font-medium "
                  to="/register"
                >
                  Register
                </Link>
                <Link className="link link-hover ps-1 font-medium" to="/login">
                  Login
                </Link>
              </nav>
            </div>
          </div>
    
        <div className=" flex  justify-center text-center items-center flex-end  py-3 px-3">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved
            Here.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Footer;
