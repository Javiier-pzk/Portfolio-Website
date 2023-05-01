import { motion } from "framer-motion";
import { TiArrowForward, TiArrowForwardOutline } from "react-icons/ti";

interface Props {
  jobTitle: string;
  company: string;
  jobDuration: string;
  jobDescriptions: string[];
  attachmentNames: string[];
}

const handleJobDescriptions = (jobDescriptions: string[]) =>
  jobDescriptions.map((jobDescription) => (
    <li>
      {jobDescription.charAt(0) === "-" ? (
        <div className="text-base flex gap-2 text-textLight pl-8">
          <span className="text-textYellow mt-1">
            <TiArrowForwardOutline />
          </span>
          {jobDescription.slice(1)}
        </div>
      ) : (
        <div className="text-base flex gap-2 text-textLight">
          <span className="text-textYellow mt-1">
            <TiArrowForward />
          </span>
          {jobDescription}
        </div>
      )}
    </li>
  ));

const handleAttachments = (attachmentNames: string[]) =>
  attachmentNames.map((attachmentName) => (
    <a href={`/assets/${attachmentName}`} target="_blank">
      <button className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300">
        {attachmentName}
      </button>
    </a>
  ));

const WorkDetails = ({
  jobTitle,
  company,
  jobDuration,
  jobDescriptions,
  attachmentNames,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {jobTitle}
        <span className="text-textYellow tracking-wide"> @ {company}</span>
      </h3>
      <p className="text-md mt-1 font-medium text-textDark">{jobDuration}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {handleJobDescriptions(jobDescriptions)}
      </ul>
      {attachmentNames.length > 0 ? (
        <div className="mt-6 flex flex-col">
          <p className="text-md font-medium text-textDark">Attachments:</p>
          <div className="flex gap-2 mt-2">
            {handleAttachments(attachmentNames)}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </motion.div>
  );
};

export default WorkDetails;
