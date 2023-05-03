import SectionTitle from "./sectionTitle";
import {
  SiExpo,
  SiAngular,
  SiReact,
  SiPython,
  SiJavascript,
  SiCsharp,
  SiC,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiFlask,
  SiFirebase,
  SiAzurefunctions,
  SiGooglemaps,
  SiGoogleanalytics,
  SiAzurepipelines,
  SiMicrosoftazure,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../public/assets/images/profile-pic.jpeg";
import { useState } from "react";

const AboutMePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className=" max-w-containerSmall mx-auto py-32 flex flex-col gap-8 xs:px-10 xl:px-4"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 flex flex-col gap-2 items-center">
          <div className="w-full text-base text-textLight font-medium flex flex-col gap-4">
            <p>
              Hi, my name is Javier and I am very passionate about software
              engineering. I have done a total of 3 tech internships so far and
              these are the skills I have picked up along the way
            </p>
            <p className="text-textDark">Programming Languages:</p>
            <ul className="list-disc pl-8">
              <li>Proficient:</li>
              <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <SiPython />
                  </span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <FaJava />
                  </span>
                  Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <SiCsharp />
                  </span>
                  C#
                </li>
              </ul>
              <li>Intermediate:</li>
              <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <SiJavascript />
                  </span>
                  Javascript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <SiTypescript />
                  </span>
                  Typescript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <SiC />
                  </span>
                  C
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <SiPostgresql />
                  </span>
                  PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-textYellow">
                    <GrMysql />
                  </span>
                  MySQL
                </li>
              </ul>
            </ul>
          </div>
          {isExpanded && (
            <div className="w-full text-base text-textLight font-medium flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-textDark"
              >
                Cloud Technologies:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="list-disc pl-8"
              >
                <li>Microsoft Azure:</li>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiAzurefunctions />
                    </span>
                    Azure Functions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiAzurepipelines />
                    </span>
                    Azure Pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiMicrosoftazure />
                    </span>
                    Azure Databases
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiMicrosoftazure />
                    </span>
                    Azure SQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiMicrosoftazure />
                    </span>
                    Azure Storage
                  </li>
                </ul>
                <li>Google Cloud Platform:</li>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <TbBrandGoogleBigQuery />
                    </span>
                    BigQuery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiFirebase />
                    </span>
                    Firebase
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiGooglemaps />
                    </span>
                    Google Maps Platform
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiGoogleanalytics />
                    </span>
                    Google Analytics
                  </li>
                </ul>
              </motion.ul>
              <motion.p
                className="text-textDark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Frameworks:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="list-disc pl-8"
              >
                <li>Proficient:</li>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiAngular />
                    </span>
                    Angular
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiExpo />
                    </span>
                    Expo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiReact />
                    </span>
                    React (Next.js)
                  </li>
                </ul>
                <li>Intermediate:</li>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiExpress />
                    </span>
                    Express JS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-textYellow">
                      <SiFlask />
                    </span>
                    Flask
                  </li>
                </ul>
              </motion.ul>
            </div>
          )}
          <button
            className="w-36 h-12 rounded-md text-textYellow text-[13px] border border-textYellow hover:bg-hoverColor duration-300"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show More"}
          </button>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profilePic}
                alt="profile pic"
              />
            </div>
          </div>
          <div
            className="hidden lgl:inline-flex w-full h-80 border-2 border-textYellow 
                            rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 
                            transition-transform duration-300"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
