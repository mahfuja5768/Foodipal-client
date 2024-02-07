import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Title from "../../hooks/Title";
import useAuth from "./../../hooks/useAuth";

const Bookings = () => {
  const { user } = useAuth();
  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get(
        `https://foodie-pal-server.vercel.app/bookings/${user.email}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <Title>My Bookings</Title>
      <div className="overflow-x-auto">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg border-y-4 text-red border-red">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
            </tr>
          </thead>{" "}
          <tbody>
            {bookings?.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <th>{item.name}</th>
                <td>{item.email}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
