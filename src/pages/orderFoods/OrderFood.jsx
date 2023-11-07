import { Link } from "react-router-dom";


const OrderFood = () => {


    return (
        <div>
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
                  name="password"
                  placeholder="password"
                  className="input w-full border-2 border-red rounded-none input-bordered text-black"
                  required
                />
                </div>
              </div>
              <p className=" text-lg my-5">
                New to this
                <Link to="/register" className="link text-blue-500 ms-2">
                  Register now
                </Link>
              </p>
              <input
                type="submit"
                className="w-full cursor-pointer hover:bg-secondary text-lg bg-red text-white my-2 rounded-lg py-4 font-bold"
                value="Login now"
              />
            </form>
        </div>
    );
};

export default OrderFood;