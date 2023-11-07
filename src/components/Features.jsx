import Title from "../hooks/Title";
import bg from "../assets/images/img-19.png";

const Features = () => {
  return (
    <div
      className=" my-24  "
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Title>Features</Title>
      <div className="hero-content max-w-[1280px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className=" lg:col-span-3 space-y-6 ">
            <h1 className="mb-4 text-2xl md:text-4xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto">
              With our new website, you can:
            </h1>
            <p className="text-xl font-medium text-red">
              Browse Our Delicious Menu:
            </p>{" "}
            Explore a wide variety of mouthwatering food items we offer. From
            appetizers to desserts, we have something to satisfy every palate.
            <p className="text-xl font-medium text-red">Dive Deeper:</p>
            Click on individual items to get detailed descriptions, images, and
            pricing. Get a closer look at what makes each dish so special.
            <p className="text-xl font-medium text-red">
              Share Your Creations:
            </p>
            We encourage you to create your own culinary masterpieces. You can
            add a food item to our menu, allowing others to taste your
            innovation.
            <p className="text-xl font-medium text-red">Keep Things Fresh:</p>
            As our menu evolves, you can easily delete or modify items to ensure
            that it always reflects our latest offerings and seasonal
            specialties.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;