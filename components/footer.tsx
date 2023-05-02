import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";

const Footer = () => {
    return (
        <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full pt-6 pb-12 gap-4">
            <a href="https://github.com/Javiier-pzk" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <TbBrandGithub />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/javier-phon-zhee-kai/"
            target="_blank"
          >
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SlSocialLinkedin />
            </span>
          </a>
          <a href="mailto:javierphon@gmail.com" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiGmail />
            </span>
          </a>
          <a href="mailto:javier.pzk@u.nus.edu" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textYellow cursor-pointer hover:-translate-y-2 transition-all duration-300">
              <SiMicrosoftoutlook />
            </span>
          </a>
        </div>
    )
}

export default Footer