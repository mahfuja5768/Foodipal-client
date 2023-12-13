const Title = ({ children }) => {
  const bg = "https://i.ibb.co/khGGKqz/img-2.png";
  return (
    <div className="ps-3  my-24">
      <div className="flex flex-col items-center">
        <div className="border-t-4 border-red w-1/2"></div>
        <h2
          className="text-2xl md:text-6xl font-bold py-4 flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {children}
        </h2>
        <div className="border-t-4 border-red w-1/2"></div>
      </div>
    </div>
  );
};

export default Title;
