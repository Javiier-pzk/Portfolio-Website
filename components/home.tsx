import HomePageLeft from "./homeleft";
import HomePageDetails from "./homeDetails";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="w-full h-[88vh] xl:flex items-center justify-between gap-5">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-20 ml-5 h-full left-0 bottom-0">
        <HomePageLeft />
      </motion.div>
      <div className="h-[88vh] w-full mx-auto p-4">
        <HomePageDetails />
      </div>
    </div>
  );
};

export default HomePage;
