
import { NavLink } from "react-router-dom";

const useCoreNav = () => {
  return (
    <ul
      tabIndex={0}
      className="dropdown-content text-black z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
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
      <li>
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
      <li>
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
};

export default useCoreNav;
