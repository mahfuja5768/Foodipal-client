import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../hooks/Button";

const AddReview = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [review, setReview] = useState(" ");
  const handleAdd = () => {
    if (user) {
      if (review) {
        const newReview = {
          date: new Date(),
          email: user?.email,
          name: user?.displayName,
          photo: user?.photoURL,
          review,
        };
        axios
          .post("https://foodie-pal-server.vercel.app/add-review", newReview)
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Successfully review added!",
              icon: "success",
              confirmButtonText: "Done",
            });
            document.getElementById("my_modal_5").showModal(false)
          })
          .catch((err) => console.log(err.message));
      } else {
        Swal.fire({
          title: "Sorry!",
          text: "Please add review!",
          icon: "error",
          confirmButtonText: "Done",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "You are not login, please login first!",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24 text-center">
      <h2 className="text-2xl text-red font-bold my-5">Please Give A Review</h2>
      <Link onClick={() => document.getElementById("my_modal_5").showModal()}>
        <Button>Add Review</Button>
      </Link>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="py-4">Add Your Review</p>
          <input
            onChange={(e) => setReview(e.target.value)}
            type="text"
            placeholder="Type here"
            className="px-3 me-2 rounded-2xl border-2 border-red text-black"
          />
          <div className="modal-action">
            <form method="dialog" className="flex justify-between gap-5">
              <Link
                onClick={handleAdd} 
              >
                <Button>Add</Button>
              </Link>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddReview;
