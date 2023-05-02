import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/assets/images/profile-pic.jpeg";

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <Link href="#home">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full w-14 h-14 overflow-hidden"
          >
            <Image src={profilePic} alt="navbarlogo" object-fit="cover" />
          </motion.div>
        </Link>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                About Me
              </motion.li>
            </Link>
            <Link
              href="#experience"
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Work Experiences
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>
            <Link
              href="#certifications"
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Certifications
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textLight hover:text-textYellow cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
        </div>
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textYellow cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textYellow inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textYellow inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
