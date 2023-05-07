import { motion } from "framer-motion";

interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05 }}
      className="font-titleFont text-2xl font-semibold flex items-center text-textYellow"
    >
      {title}
      <span className="hidden md:inline md:w-60 lgl:w-72 h-[0.5px] bg-textDark ml-6"></span>
    </motion.h2>
  );
};

export default SectionTitle;
