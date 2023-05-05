import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

interface Props {
    projectTitle: string;
    projectDescription: string;
    projectUrl: string;
    projectTechStack: string[];
    loadingDelay: number;
}

const ProjectCard = ({projectTitle, projectDescription, projectUrl, projectTechStack, loadingDelay}: Props) => {
  return (
    <a href={projectUrl} target="_blank">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: loadingDelay }}
        className="w-full h-80 rounded-lg bg-hoverColor p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textYellow" />
          <RxOpenInNewWindow className="text-4xl hover:text-textYellow" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textYellow">
            {projectTitle}
          </h2>
          <p className="text-sm mt-3">
            {projectDescription}
          </p>
        </div>
        <ul className="flex text-xs mdl:text-sm text-textDark items-center gap-2 justify-between flex-wrap">
         {projectTechStack.map((item, index) => (
            <li key={index}>{item}</li>
         ))}
        </ul>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
