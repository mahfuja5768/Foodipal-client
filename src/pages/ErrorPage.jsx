import Lottie from "lottie-react";
import gif from "../assets/Animation - 1699174502851.json";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl text-[#d03300] uppercase font-bold">This PAGE NOT FOUND!</h1>
        <Link to="/">
          {" "}
          <h3 className="text-2xl underline cursor-pointer text-green-500 font-semibold">
            Back to home page
          </h3>
        </Link>
      </div>
      <Lottie className="w-1/3 mt-12" animationData={gif}></Lottie>
    </div>
  );
};

export default ErrorPage;
