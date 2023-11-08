
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl text-red uppercase font-bold">This PAGE NOT FOUND!</h1>
        <Link to="/">
          {" "}
          <h3 className="text-2xl underline cursor-pointer text-green-500 font-semibold">
            Back to home page
          </h3>
        </Link>
      </div>
      <img src={'https://i.ibb.co/0sXqnjm/giphy.gif'} alt="" />
    </div>
  );
};

export default ErrorPage;
