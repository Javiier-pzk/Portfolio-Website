import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/sectionTitle";
import WorkDetails from "@/components/workDetails";
import coinhakoLogo from "@/public/assets/images/coinhako-logo.png";
import nusLogo from "@/public/assets/images/nus-logo.png";
import successItLogo from "@/public/assets/images/success-it-logo.png";
import powerhouseAiLogo from "@/public/assets/images/powerhouse-ai-logo.png";
import worldQuantLogo from "@/public/assets/images/worldquant-logo.png";

const Experience = () => {
  const [isWorldQuant, setIsWorldQuant] = useState(true);
  const [isCoinhako, setIsCoinhako] = useState(false);
  const [isNus, setIsNus] = useState(false);
  const [isSuccessIt, setIsSuccessIt] = useState(false);
  const [isPowerhouseAi, setIsPowerhouseAi] = useState(false);

  const handleWorldQuant = () => {
    setIsWorldQuant(true);
    setIsCoinhako(false);
    setIsNus(false);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleCoinhako = () => {
    setIsWorldQuant(false);
    setIsCoinhako(true);
    setIsNus(false);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleNus = () => {
    setIsWorldQuant(false);
    setIsCoinhako(false);
    setIsNus(true);
    setIsSuccessIt(false);
    setIsPowerhouseAi(false);
  };

  const handleSuccessIt = () => {
    setIsWorldQuant(false);
    setIsCoinhako(false);
    setIsNus(false);
    setIsSuccessIt(true);
    setIsPowerhouseAi(false);
  };

  const handlePowerhouseAi = () => {
    setIsWorldQuant(false);
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
                isWorldQuant
                  ? "border-l-textYellow text-textYellow"
                  : "border-l-gray-500 text-gray-500"
              } border-l-2 bg-transparent hover:bg-hoverColor py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
              onClick={handleWorldQuant}
            >
              WorldQuant
            </li>
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
          {isWorldQuant && (
            <WorkDetails
              jobDetails={[
                { 
                  jobTitle: "Quantitative Developer, Macro",
                  startDate: "2025-06", 
                },
              ]}
              jobDescriptions={[
                "Built and maintained trading/research tooling for Quant Macro portfolio managers and researchers, including APIs, analytics libraries, data pipelines, monitoring scripts, and visualization utilities to accelerate alpha development and support live trading operations.",
                "Took ownership of Alpha Analyzer within one month of joining and led end-to-end development as the primary project owner and developer; delivered a production-grade visualization and comparison platform used by Quant Macro portfolio managers and researchers, supporting single-alpha analysis, multi-alpha benchmarking, and instrument-level breakdowns.",
                "Improved intraday tick data access performance by 10x by designing and implementing a caching layer with a background daemon to stream live time-series updates into internal cache storage, significantly reducing repeated database reads.",
                "Developed a consolidated global macro event calendar service by integrating multiple internal and external datasets into a centralized platform, enabling researchers to enhance alpha signals and improve volatility forecasting, volume modeling, and portfolio construction.",
                "Collaborated closely with portfolio managers and researchers to translate trading/research requirements into scalable production-ready systems, supporting both alpha research and live trading operations.",
              ]}
              attachmentNames={[]}
              image={worldQuantLogo}
              companyUrl="https://www.worldquant.com"
            />
          )}
          {isCoinhako && (
            <WorkDetails
              jobDetails={[
                { 
                  jobTitle: "Software Engineer II",
                  startDate: "2024-07",
                  endDate: "2025-06"
                },
                { 
                  jobTitle: "Software Engineer I",
                  startDate: "2024-01", 
                  endDate: "2024-06"
                },
                { 
                  jobTitle: "Software Engineer Intern",
                  startDate: "2023-05", 
                  endDate: "2023-12",
                }
              ]}
              jobDescriptions={[
                "Led the development of a comprehensive risk management system: Heavily involved in system design, development, testing, deployment, and integration of various major crypto exchanges into the risk management system, ensuring robust risk controls for the trading team.",
                "Enhanced monitoring and visibility: Integrated telemetry services such as Datadog and Sentry, enabling real-time metrics collection and error tracking, with automated Slack notifications for trading desk services.",
                "Boosted test coverage: Increased test coverage of trading-desk services by up to 50%, significantly improving reliability and reducing potential downtime.",
                "Developed both public and internal APIs: Built and thoroughly tested APIs for public data retrieval and internal trading use, ensuring seamless access to critical market information and trading functionalities.",
                "Published essential trading libraries: Created and maintained libraries, including a FIX protocol decoder, that are heavily utilized by the trading team for efficient data processing and automation.",
                "Automated trading processes: Streamlined and automated key trading operations, improving efficiency and reducing manual workloads for the trading team.",
                "Managed cloud infrastructure: Maintained and optimized AWS cloud infrastructure for trading desk services and trader tools using Terraform, ensuring high availability and scalability.",
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
