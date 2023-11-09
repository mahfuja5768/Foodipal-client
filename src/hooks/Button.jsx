import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <div className="w-full">
        <button className=" bg-red w-full font-bold hover:text-red  hover:bg-transparent hover:border-4 hover:border-red text-white btn rounded-full normal-case border-4 border-red">
          {children}
        </button>
    </div>
      </motion.button>
  );
};

export default Button;
