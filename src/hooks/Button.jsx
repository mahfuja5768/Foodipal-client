

const Button = ({ children }) => {
    
  return (
    <div>
      <button className="bg-red font-bold hover:text-red  hover:bg-transparent hover:border-4 hover:border-red text-white btn rounded-full normal-case border-4 border-red">
       { children }
      </button>
    </div>
  );
};

export default Button;
