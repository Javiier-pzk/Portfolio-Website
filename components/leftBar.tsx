import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { motion } from "framer-motion";

const LeftBar = () => {
  return (
    <motion.div
      className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">
          <a href="https://github.com/Javiier-pzk" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandGithub />
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/javiier-pzk/"
            target="_blank"
          >
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialLinkedin />
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="mailto:javierphon@gmail.com" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiGmail />
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="mailto:javier.pzk@u.nus.edu" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiMicrosoftoutlook />
            </span>
          </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
      </div>
    </motion.div>
  );
};

export default LeftBar;
