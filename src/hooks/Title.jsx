import bg from "../assets/images/img-2.png";

const Title = ({ children }) => {
  return (
    <div className="ps-3  my-12" >
     <div className="flex flex-col items-center">
     <div className="border-t-4 border-red w-1/2"></div>
      <h2 className="text-3xl md:text-6xl font-bold py-4" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
  
      }}>{children}</h2>
      <div className="border-t-4 border-red w-1/2"></div>
     </div>
    </div>
  );
};

export default Title;
