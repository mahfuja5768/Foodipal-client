import p1 from "../../assets/live.avif";
import p2 from "../../assets/reservation.avif";
import { useState } from "react";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import EventsCountDown from "./EventsCountDown";
import Title from "../../hooks/Title";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../hooks/Button";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

export default function LiveEvents() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  const handleBookings = () => {
    if (user) {
      if (selected) {
        const bookings = {
          date: selected,
          email: user?.email,
          name: user?.displayName,
        };
        axios
          .post("https://foodie-pal-server.vercel.app/bookings", bookings)
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: "Successfully booked!",
              icon: "success",
              confirmButtonText: "Done",
            });
            navigate("/bookings");
          })
          .catch((err) => console.log(err.message));
      } else {
        Swal.fire({
          title: "Sorry!",
          text: "Please select a date!",
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
    <section
      className="my-24 text-white pt-12 bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 2)), url(${p2})`,
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 pb-24">
        <Title>Live Events And Reservation</Title>
        <EventsCountDown></EventsCountDown>
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <img
            src={p1}
            alt="event"
            className="lg:w-1/2 rounded-lg shadow-2xl "
          />
          <DayPicker
            className="border-2 border-red p-2 rounded-xl"
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
          />
        </div>
        <div className="my-6">
          <p className="text-lg">
            {" "}
            Escape the chill and step into a world of warmth, laughter, and
            culinary delights at our Winter Night Restaurant Live Events! Create
            unforgettable memories with your special someone or gather your
            loved ones for an enchanting evening.
          </p>
          <p>
            <strong className="text-red">
              {" "}
              🍽️ Indulge in Culinary Excellence:
            </strong>{" "}
            Savor exquisite winter-themed dishes crafted by our talented chefs.
            From hearty soups to delectable desserts, our menu is a celebration
            of seasonal flavors.
          </p>
          <p>
            <strong className="text-red">
              🎶 Live Entertainment under the Winter Sky:
            </strong>{" "}
            Experience the magic of live music and entertainment as you dine
            under the winter night sky. Our enchanting ambiance is the perfect
            backdrop for an unforgettable night out.
          </p>
          <p>
            <strong className="text-red">
              🕯️ Romantic Tables for Two or Festive Gatherings:
            </strong>{" "}
            Whether it's a romantic date night or a joyous family reunion, we
            have the perfect table for every occasion. Reserve your spot now and
            secure a front-row seat to the winter night festivities.
          </p>
          <p>
            <strong className="text-red">
              🌌 Cosy Atmosphere & Warm Hospitality:
            </strong>{" "}
            Our restaurant is adorned with twinkling lights and cozy decor to
            create a welcoming atmosphere. Our dedicated staff is ready to make
            your evening truly special.
          </p>

          <p>
            <strong className="text-red">
              🎁 Special Offers for Early Reservations:
            </strong>{" "}
            Book your table in advance and enjoy exclusive perks or discounts.
            It's our way of saying thank you for choosing to spend your winter
            night with us. Join us for a night of warmth, joy, and culinary
            delights. We look forward to making your winter night truly magical!
          </p>
          <p>
            📅 Reserve Your Table Now! Don't miss out on this one-of-a-kind
            winter experience. Secure your table by calling +8812412333 or visit
            our website at Foodie Pal. Hurry, limited spots available!
          </p>
        </div>
        <Link onClick={handleBookings} className="flex justify-center">
          <Button className="btn mt-1 mb-5 normal-case bg-gray-200 btn-outline">
            <span>Book Now</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
