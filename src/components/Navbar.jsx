import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import userProfile from "../assets/user.png";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useCoreNav from "../hooks/useCoreNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  const coreNav = useCoreNav();

  const corNav2 = (
    <ul
      tabIndex={0}
      className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li onClick={() => setOpen(!open)}>
        <NavLink
          to="/myAddedFoods"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-red decoration-4 underline-offset-8"
              : "hover:text-red"
          }
        >
          My added foods
        </NavLink>
      </li>
      <li onClick={() => setOpen(!open)}>
        <NavLink
          to="/addAFood"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-red decoration-4 underline-offset-8"
              : "hover:text-red"
          }
        >
          Add a food item
        </NavLink>
      </li>
      <li onClick={() => setOpen(!open)}>
        <NavLink
          to="/myOrderedFood"
          className={({ isActive }) =>
            isActive
              ? " underline decoration-red decoration-4 underline-offset-8"
              : "hover:text-red"
          }
        >
          My ordered food
        </NavLink>
      </li>
    </ul>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully User Logged out",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav className="shadow shadow-base">
        <div className="max-w-[1280px] mx-auto lg:grid lg:grid-cols-4 lg:gap-2 flex items-center flex-row-reverse lg:p-4 px-4 justify-between lg:flex-row gap-6">
          <div
            onClick={() => setOpen(!open)}
            className="h-6 w-6 lg:hidden block"
          >
            {
              // open ? 'close icon' : 'open icon'
              open ? (
                <FaX className="text-2xl cursor-pointer"></FaX>
              ) : (
                <FaBars className="text-2xl cursor-pointer"></FaBars>
              )
            }
          </div>
          <div>
            <Link to="/">
              <div className=" h-16 flex items-center ">
                <h3 className="text-red text-3xl font-bold">Foodie Pal</h3>
              </div>
            </Link>
          </div>

          <div className="text-lg justify-center hidden col-span-2 lg:flex list-none gap-5 font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `underline decoration-red   decoration-4 underline-offset-8`
                    : "hover:text-red"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allFoods"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-red decoration-4 underline-offset-8"
                    : "hover:text-red"
                }
              >
                All Foods
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-red decoration-4 underline-offset-8"
                    : "hover:text-red"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? " underline decoration-red decoration-4 underline-offset-8"
                    : "hover:text-red"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <ThemeToggler></ThemeToggler>
            </li>
          </div>
          <div className="hidden lg:flex gap-3 justify-center items-center">
            {user && (
              <div className=" flex  items-center gap-2 justify-center mx-2">
                {user?.photoURL ? (
                  <div className="dropdown dropdown-bottom">
                    <label
                      tabIndex={0}
                      className="w-full btn m-1 bg-transparent hover:bg-transparent border-none"
                    >
                      <img
                        src={user?.photoURL}
                        className=" w-10 h-10 cursor-pointer rounded-full select-none"
                        alt="user photo"
                      />
                    </label>
                    {coreNav}
                  </div>
                ) : (
                  <div className="dropdown dropdown-bottom">
                    <label
                      tabIndex={0}
                      className="btn m-1 bg-transparent hover:bg-transparent border-none"
                    >
                      <img
                        src={userProfile}
                        className=" w-10 h-10 cursor-pointer rounded-full select-none"
                        alt="user photo"
                      />
                    </label>
                    {coreNav}
                  </div>
                )}

                <h3 className=" text-sm text-center mt-1">
                  {user?.displayName}
                </h3>
              </div>
            )}
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-red border-none hover:bg-red text-white"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link
                to="/login"
                className="btn bg-red border-none hover:bg-red text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        <ul
          className={`font-bold text-lg  text-white z-10   gap-4 px-8 py-6 pb-12 bg-red w-full absolute duration-700 all ${
            open ? "top-16" : "top-[-800px]"
          }`}
        >  <div className="flex justify-between "> <div className="space-y-3"> 
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `underline decoration-white  decoration-4 underline-offset-8`
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/allFoods"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : ""
              }
            >
              All Foods
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          <li onClick={() => setOpen(!open)}>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? " underline decoration-white decoration-4 underline-offset-8"
                  : ""
              }
            >
              Register
            </NavLink>
          </li>
          

          <li>
            {user && (
              <div className=" flex flex-col items-start gap-2 -ms-5 justify-start">
                {user && (
                  <div className=" flex  items-center gap-1 justify-start ">
                    {user?.photoURL ? (
                      <div className="dropdown dropdown-left">
                        <label
                          tabIndex={0}
                          className="w-full btn bg-transparent hover:bg-transparent border-none"
                        >
                          <img
                            src={user?.photoURL}
                            className=" w-10 h-10 cursor-pointer rounded-full select-none"
                            alt="user photo"
                          />
                        </label>
                        {corNav2}
                      </div>
                    ) : (
                      <div className="dropdown dropdown-bottom">
                        <label
                          tabIndex={0}
                          className="btn m-1 bg-transparent hover:bg-transparent border-none"
                        >
                          <img
                            src={userProfile}
                            className=" w-10 h-10 cursor-pointer rounded-full select-none"
                            alt="user photo"
                          />
                        </label>
                        {corNav2}
                      </div>
                    )}

                    <h3 className=" text-sm text-center font-bold">
                      {user?.displayName}
                    </h3>
                  </div>
                )}
              </div>
            )}
          </li>
          
          <li onClick={() => setOpen(!open)}>
            {user && (
              <Link
                to="/login"
                onClick={handleLogout}
                className="btn bg-white border-none btn-sm text-black"
              >
                Log out
              </Link>
            )}
            {!user && (
              <Link to="/login" className="btn btn-sm bg-white border-none text-black">
                Login
              </Link>
            )}
          </li> </div>
          <div>
          <li className="mt-2">
            <span onClick={() => setOpen(!open)}>
              <ThemeToggler></ThemeToggler>
            </span>
          </li>
          </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
