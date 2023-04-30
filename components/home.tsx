import HomePageLeft from "./homeleft";
import HomePageDetails from "./homeDetails";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex w-32 h-full fixed bottom-0">
        <HomePageLeft />
      </motion.div>
      <div className="h-[88vh] w-full mx-auto p-4">
        <HomePageDetails />
      </div>
    </div>
  );
};

export default HomePage;
