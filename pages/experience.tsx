import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/sectionTitle";
import WorkDetails from "@/components/workDetails";
import coinhakoLogo from "@/public/assets/images/coinhako-logo.png";
import nusLogo from "@/public/assets/images/nus-logo.png";
import successItLogo from "@/public/assets/images/success-it-logo.png";
import powerhouseAiLogo from "@/public/assets/images/powerhouse-ai-logo.png";

const Experience = () => {
  const [isCoinhako, setIsCoinhako] = useState(true);
  const [isNus, setIsNus] = useState(false);
  const [isSuccessIt, setIsSuccessIt] = useState(false);
  const [isPowerhouseAi, setIsPowerhouseAi] = useState(false);

  const handleCoinhako = () => {
    setIsCoinhako(true);
    setIsNus(false);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleNus = () => {
    setIsCoinhako(false);
    setIsNus(true);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleSuccessIt = () => {
    setIsCoinhako(false);
    setIsNus(false);
    setIsSuccessIt(true);
    setIsPowerhouseAi(false);
  };

  const handlePowerhouseAi = () => {
    setIsCoinhako(false);
    setIsNus(false);
    setIsSuccessIt(false);
    setIsPowerhouseAi(true);
  };

  return (
    <div className="min-h-[90vh] sml:min-h-[88vh] flex items-center mt-[10vh] sml:mt-0 py-10 mdl:py-20">
      <Head>
        <title>Javiier-pzk | Work Experiences</title>
      </Head>
      <main className="flex flex-col">
        <SectionTitle title="Work Experiences" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="md:w-50 flex flex-col"
          >
            <li
              className={`${
                isCoinhako
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleCoinhako}
            >
              Coinhako
            </li>
            <li
              className={`${
                isNus
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleNus}
            >
              National University of Singapore
            </li>
            <li
              className={`${
                isSuccessIt
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleSuccessIt}
            >
              Success IT Consultancy & Services
            </li>
            <li
              className={`${
                isPowerhouseAi
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handlePowerhouseAi}
            >
              Powerhouse AI
            </li>
          </motion.ul>
          {isCoinhako && (
            <WorkDetails
              jobDetails={[
                { 
                  jobTitle: "Software Engineer",
                  startDate: "2024-01", 
                },
                { 
                  jobTitle: "Software Engineer Intern",
                  startDate: "2023-05", 
                  endDate: "2023-12",
                }
              ]}
              jobDescriptions={[
                "Optimised the efficiency of the company’s options database application, handled the migration of old trade data into AWS timestreams and implemented proper monitoring using the Slack API.",
                "Containerized trading desk applications using micro-services like Docker.",
                "Published and developed a Python library that allows traders to query and analyse market data from multiple exchanges using the FIX protocol.",
                "Supported third-party trade engine integration by developing REST APIs using Go, Redis and MySQL and deploying it on AWS Lambdas"
              ]}
              attachmentNames={[]}
              image={coinhakoLogo}
              companyUrl="https://www.coinhako.com"
            />
          )}
          {isNus && (
            <WorkDetails
              jobDetails={[
                { 
                  jobTitle: "Teaching Assistant (Software Engineering)",
                  startDate: "2022-01", 
                  endDate: "2023-12",
                }
              ]}
              jobDescriptions={[
                "Teaching Assistant for a software engineering course, CS2103/T, at NUS during the following academic periods:",
                "-AY23/24 Sem 1 (Aug 2023 - Dec 2023)",
                "-AY22/23 Sem 2 (Jan 2023 – May 2023)",
                "-AY21/22 Sem 2 (Jan 2022 – May 2022)",
                "Tutored students on software engineering principles, concepts, and practices.",
                "Graded student's practical exams.",
                "Provided feedback and clarified any doubts students may have with topics taught in the course.",
              ]}
              attachmentNames={["AY2324S1-Tutor-Report.pdf", "AY2223S2-Tutor-Report.pdf", "AY2122S2-Tutor-Report.pdf"]}
              image={nusLogo}
              companyUrl="https://nus.edu.sg"
            />
          )}
          {isSuccessIt && (
            <WorkDetails
            jobDetails={[
                { 
                  jobTitle: "Software Engineer Intern",
                  startDate: "2022-05", 
                  endDate: "2022-07",
                }
              ]}
              jobDescriptions={[
                "Built, deployed and maintained both the frontend and backend of the company’s new SAAS product.",
                "Spearheaded the backend development and overall design for the master control app of the company’s new SAAS product.",
                "Developed the company's backend services with Azure, which includes writing and deploying Azure functions, using Azure Databases and SQL to interact with databases and using Azure DevOps to write pipelines to deploy static web appsand functions.",
                "Redesigned, refactored and developed the company’s Authentication API and other backend services, to make them more secure, versatile and flexible in supporting more of the company’s products.",
              ]}
              attachmentNames={[]}
              image={successItLogo}
              companyUrl="https://www.successit.com.sg"
            />
          )}
          {isPowerhouseAi && (
            <WorkDetails
            jobDetails={[
                { 
                  jobTitle: "Software Engineer Intern",
                  startDate: "2021-12", 
                  endDate: "2022-05",
                }
              ]}
              jobDescriptions={[
                "Designed, developed, and maintained several new features as well as the UI of the application",
                "Integrated the application's frontend and backend together with RESTful APIs.",
                "Set up Firebase (Google) analytics and crash analytics for the application.",
                "Utilised Google BigQuery and Google Cloud Platform (GCP) to generate and automate business intelligence reports for the company and clients.",
                "Ensured that the application is of the best possible performance, quality, and responsiveness.",
                "Identified bottlenecks and fixed bugs in the application.",
                "Maintained code quality, organisation, and automatization of the application.",
              ]}
              attachmentNames={[]}
              image={powerhouseAiLogo}
              companyUrl="https://www.pwh.ai"
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Experience;
