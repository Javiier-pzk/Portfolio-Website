import { motion } from "framer-motion";
import { TiArrowForward, TiArrowForwardOutline } from "react-icons/ti";
import Image, { StaticImageData } from "next/image";

interface Props {
  jobDetails: any[];
  jobDescriptions: string[];
  attachmentNames: string[];
  image: StaticImageData;
  companyUrl: string;
}

const handleJobDetails = (jobDetails: any[]) =>
  jobDetails.map((jobDetail, index) => (
    <li key={index}>
      <div className={`flex ${jobDetails.length == 1 ? "flex-col" : "flex-row"}`}>
        <div className="font-medium text-xl font-titleFont">
          {jobDetail.jobTitle}
        </div>
        <div className={`flex flex-row gap-2 text-md mt-1 font-medium text-textDark ${jobDetails.length > 1 ? "mx-3" : ""}`}>
          <div>
            {formatDate(jobDetail.startDate)} - {jobDetail.endDate ? formatDate(jobDetail.endDate) : "Present"}
          </div>
          <div>
            •
          </div>
          <div>
            {calculateDateDiff(jobDetail.startDate, jobDetail.endDate ? jobDetail.endDate : new Date().toISOString())}
          </div>
        </div>
      </div>
    </li>
  ));


const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleString('default', { month: 'short', year: 'numeric' });
}

const calculateDateDiff = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let diffInYears = end.getFullYear() - start.getFullYear();
  let diffInMonths = end.getMonth() - start.getMonth() + 1;
  if (diffInMonths < 0) {
    diffInYears--;
    diffInMonths += 12;
  } else if (diffInMonths === 12) {
    diffInYears++;
    diffInMonths = 0;
  }
  const yearUnit = diffInYears === 1 ? "yr" : "yrs";
  const monthUnit = diffInMonths === 1 ? "mo" : "mos";
  if (diffInYears === 0) {
    return `${diffInMonths} ${monthUnit}`;
  }
  if (diffInMonths === 0) {
    return `${diffInYears} ${yearUnit}`;
  }
  return `${diffInYears} ${yearUnit} ${diffInMonths} ${monthUnit}`;
}

const handleJobDescriptions = (jobDescriptions: string[]) =>
  jobDescriptions.map((jobDescription, index) => (
    <li key={index}>
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
  attachmentNames.map((attachmentName , index) => (
    <a key={index} href={`/assets/${attachmentName}`} target="_blank">
      <button className="px-4 py-2 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300">
        {attachmentName}
      </button>
    </a>
  ));

const WorkDetails = ({
  jobDetails,
  jobDescriptions,
  attachmentNames,
  image,
  companyUrl
}: Props) => {
  return (
    <div className="w-full">
      <div className="flex gap-3 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden w-14 h-14"
        >
          <a href={companyUrl}>
            <Image src={image} alt="company logo" object-fit="cover" />  
          </a>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-1"
        >
          {handleJobDetails(jobDetails)}
        </motion.ul>
      </div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex flex-col gap-3"
      >
        {handleJobDescriptions(jobDescriptions)}
      </motion.ul>
      {attachmentNames.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 flex flex-col"
        >
          <p className="text-md font-medium text-textDark">Attachments:</p>
          <div className="flex gap-2 mt-2">
            {handleAttachments(attachmentNames)}
          </div>
        </motion.div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WorkDetails;
