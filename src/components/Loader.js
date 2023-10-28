import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import loader from "../assets/Img/cat.json";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white ">
      {/* <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 h-screen bg-[#2a2b2c] "
      ></motion.div> */}

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ scale: 0, y: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Player autoplay loop src={loader} className="w-32 h-32"></Player>
      </motion.div>
      {/* <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 h-screen bg-[#2a2b2c] "
      ></motion.div> */}
    </div>
  );
};

export default Loader;
