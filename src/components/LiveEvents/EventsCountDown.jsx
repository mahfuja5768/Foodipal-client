
import { useEffect, useRef, useState } from "react";

const EventsCountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Feb 25, 2024 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div
      className="max-w-[1280px] mx-auto mb-24 mt-12  px-3"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
        <div className="grid grid-cols-4 gap-5 p-3 rounded-3xl ">
          <section className="text-4xl p-4 text-white border-2 border-white rounded-xl flex flex-col items-center">
            <p>{timerDays}</p>
            <p>d</p>
          </section>
          <section className="text-4xl p-4 text-white border-2 border-white rounded-xl flex flex-col items-center">
            <p>{timerHours}</p>
            <p>h</p>
          </section>
          <section className="text-4xl p-4 text-white border-2 border-white rounded-xl flex flex-col items-center">
            <p>{timerMinutes}</p>
            <p>m</p>
          </section>
          <section className="text-4xl p-4 text-white border-2 border-white rounded-xl flex flex-col items-center">
            <p>{timerSeconds}</p>
            <p>s</p>
          </section>
        </div>
      </div>
  );
};

export default EventsCountDown;
