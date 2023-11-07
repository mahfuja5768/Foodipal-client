import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import gif from "../../assets/login.json";
import bg from "../../assets/images/img-19.png";
 
const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const { signInUser, googleSign } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    setLoginError("");
    formValues.reset();


    signInUser(email, password)
      .then((res) => {
        console.log(res.user.displayName);
        if (res.user) {
          Swal.fire({
            title: "Success!",
            text: "Successfully User Logged in",
            icon: "success",
            confirmButtonText: "Done",
          });
          return navigate(location?.state ? location.state : "/");
        }
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully User Logged in",
          icon: "success",
          confirmButtonText: "Done",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setLoginError(err.message);
      });
  };

  return (
    <div className="py-0 lg:py-8 px-4"   style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover", 
      backgroundPosition: "center", 

    }}>
      <div className=" py-8 max-w-[1280px] mx-auto px-4 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
          <Lottie
                  className="lg:h-full h-16"
                  animationData={gif}
                ></Lottie>
          </div>
          <div className="lg:col-span-2">
          <h1 className=" lg:text-5xl text-start text-4xl font-bold  my-12">
          Welcome to <span className="text-red">login</span> page,
        </h1>
            <form onSubmit={handleSubmit} className=" space-y-5">
              <div className="form-control">
               
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered  border-2 border-red rounded-none w-full"
                    required
                  />
              </div>

              <div className="form-control  text-lg">
                <div className=" flex items-center">
                <input
                  type={showPass ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input w-full border-2 border-red rounded-none input-bordered text-black"
                  required
                />
                <span className="-ms-12">
                    {showPass ? (
                      <FaEyeSlash onClick={() => setShowPass(!showPass)} />
                    ) : (
                      <FaEye onClick={() => setShowPass(!showPass)} />
                    )}
                  </span>
                </div>
              </div>
              <p className=" text-lg my-5">
                New to this
                <Link to="/register" className="link text-blue-500 ms-2">
                  Register now
                </Link>
              </p>

              {loginError && (
                <h3 className="text-red  text-lg pb-2">{loginError}</h3>
              )}
              <input
                type="submit"
                className="w-full cursor-pointer hover:bg-secondary text-lg bg-red text-white my-2 rounded-lg py-4 font-bold"
                value="Login now"
              />
            </form>
            <h2 className="text-center my-1">Or</h2>
            <button
              onClick={handleGoogle}
              className="btn w-full border-2 rounded-none border-red text-lg cursor-pointer normal-case text-red bg-transparent"
            >
              <span>With Google</span>
              <span>
                <FaGoogle></FaGoogle>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
