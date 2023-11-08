import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <div className="w-full">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <button className=" bg-red w-full font-bold hover:text-red  hover:bg-transparent hover:border-4 hover:border-red text-white btn rounded-full normal-case border-4 border-red">
          {children}
        </button>
      </motion.button>
    </div>
  );
};

export default Button;
