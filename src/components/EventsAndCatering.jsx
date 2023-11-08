import Title from "../hooks/Title";

const EventsAndCatering = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Title>Events And Catering</Title>
      <p className="-mt-12">
        At Foodie Pal, we believe in making every occasion special. Our
        restaurant is not just a place to savor delicious food; it's also the
        perfect venue for your memorable events and celebrations. Whether you're
        planning a birthday party, anniversary celebration, corporate gathering,
        or any other special event, we have you covered.
      </p>
      <h3 className="text-3xl font-bold text-red my-5">
        Why Choose Foodie Pal for Your Event:
      </h3>
      <p className="my-3">
        1.<strong>Exquisite Cuisine:</strong> Our talented chefs will create a
        customized menu to suit your event's theme and your guests' preferences.
        From elegant three-course meals to delightful buffet spreads, our
        culinary expertise will leave your guests raving.
      </p>
      <p className="my-3">
        2.<strong>Ambiance:</strong>Our restaurant boasts a warm and inviting
        ambiance that can be tailored to your event. Whether you prefer an
        intimate dining experience, a casual get-together, or a grand
        celebration, our flexible space can accommodate it all.
      </p>
      <p className="my-3">
        3.<strong>Professional Service:</strong> Our dedicated staff is
        committed to providing top-notch service to make your event seamless and
        stress-free. We'll handle all the details, so you can focus on enjoying
        your time with your guests.
      </p>
      <p className="my-3">
        4.<strong>Versatile Spaces:</strong> Choose from our range of event
        spaces to find the perfect setting for your occasion. We offer options
        for both indoor and outdoor events, ensuring a comfortable atmosphere
        year-round.
      </p>
      <p className="my-3">
        4.<strong>Customization:</strong>We understand that every event is
        unique. That's why we work closely with you to understand your vision
        and tailor our services to meet your specific needs, including decor,
        music, and more.
      </p>
      <h3 className="text-3xl font-bold text-red mt-5">
      Catering Services:
      </h3>
      <p>In addition to hosting events at our restaurant, we also offer catering services to bring the flavors of [Restaurant Name] to your chosen location. Our experienced catering team will provide an exquisite dining experience at your event, whether it's a wedding, corporate luncheon, or any other gathering.</p>
   <div className="grid grid-cols-1 md:grid-cols-4 my-12">
   <img src={'https://i.ibb.co/zPY3Kb0/images-1.jpg'} className="rounded-3xl w-[300px] h-[300px]" alt="" />
   <img src={'https://i.ibb.co/9pkvK1D/images-2.jpg'} className="rounded-3xl w-[300px] h-[300px]" alt="" />
   <img src={'https://i.ibb.co/yk4T0dR/images-3.jpg'} className="rounded-3xl w-[300px] h-[300px]" alt="" />
   <img src={'https://i.ibb.co/m9f3D7h/images-4.jpg'} className="rounded-3xl w-[300px] h-[300px]" alt="" />
   </div>
    </div>
  );
};

export default EventsAndCatering;
