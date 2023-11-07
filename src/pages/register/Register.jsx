import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Lottie from "lottie-react";
import gif from "../../assets/register.json";
import bg from "../../assets/images/img-19.png";
import axios from "axios";

const Register = () => {
  const { createUser, updateUser, googleSign } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");

    console.log(name, email, password, photoUrl);
    const userInfo = {
      name,
      email,
      password,
      photoUrl,
    };

    setRegisterError("");
    formValues.reset();

    // if (name.length === 0 || password.length < 0) {
    //   return;
    // } else if (password.length < 6) {
    //   return setRegisterError(" The password is less than 6 characters");
    // } else if (!/[A-Z]/.test(password)) {
    //   return setRegisterError(" The password don't have a capital letter");
    // } else if (!/[!#$%&?]/.test(password)) {
    //   return setRegisterError(" The password don't have a special character");
    // }

    createUser(email, password)
      .then(() => {
        updateUser(name, photoUrl)
          .then()
          .catch((err) => setRegisterError(err.message));

        axios
          .post("http://localhost:5000/users", userInfo)
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Successfully User Created!",
              icon: "success",
              confirmButtonText: "Done",
            });
          })
          .catch((err) => console.log(err.message));

        return navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUser(user.photoURL, user.displayName)
          .then()
          .catch((err) => setRegisterError(err.message));
        Swal.fire({
          title: "Success!",
          text: "Successfully User Created!",
          icon: "success",
          confirmButtonText: "Done",
        });
        return navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  };
  return (
    <div
      className="py-0 lg:py-8 px-4"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-8 max-w-[1280px] mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
          <div className="lg:col-span-2">
            <Lottie className="lg:h-[600px] h-16" animationData={gif}></Lottie>
          </div>
          <div className="lg:col-span-2">
            <h1 className=" lg:text-5xl text-start text-4xl font-bold  my-12">
              Welcome to <span className="text-red">register</span> page,
            </h1>
            <form onSubmit={handleSubmit} className=" space-y-5">
              <div className="">
                <div className="form-control">
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="input input-bordered  border-2 border-red rounded-none w-full"
                      required
                    />
                  </label>
                </div>
                <div className="form-control my-5">
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="input input-bordered  border-2 border-red rounded-none w-full"
                      required
                    />
                  </label>
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
              </div>
              <div className="form-control  mt-4">
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Enter your photo url"
                  className="input input-bordered  border-2 border-red rounded-none w-full"
                />
              </div>
              <p className=" text-lg my-5">
                Already have an account ?
                <Link to="/login" className="link text-blue-500 ms-2">
                  Login now
                </Link>
              </p>

              {registerError && (
                <h3 className="text-red-600  text-lg pb-2">{registerError}</h3>
              )}
              <input
                type="submit"
                className="w-full cursor-pointer hover:bg-hoverText bg-secondary text-white my-2 rounded-lg py-4 font-bold"
                value="  Register now"
              />
              <h2 className="text-center my-1">Or</h2>
            </form>
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

export default Register;
