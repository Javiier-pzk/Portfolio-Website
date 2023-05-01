import SectionTitle from "./sectionTitle";
import { AiFillThunderbolt, AiFillCloud } from "react-icons/ai"; 
import Image from "next/image";
import profilePic from "../public/assets/images/profile-pic.jpeg";

const AboutMePage = () => {
  return (
    <section
      id="about"
      className=" max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 xs:px-10 xl:px-4"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textLight font-medium flex flex-col gap-4">
          <p>
            Hi, my name is Javier and I am very passionate about software engineering. 
            I have done a total of 3 tech internships so far and these are the skills
            I have picked up along the way
          </p>
          <p className="text-textDark">Programming Languages:</p>
          <ul className="list-disc pl-8">
            <li>Proficient:</li>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Python
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Java
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                C#
              </li>
            </ul>
            <li>Intermediate:</li>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Javascript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Typescript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                C
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                PostgreSQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                MySQL
              </li>
            </ul>
          </ul>
          <p className="text-textDark">Cloud Technologies:</p>
          <ul className="list-disc pl-8">
            <li>Microsoft Azure:</li>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Azure Functions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Azure pipelines
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Azure Databases
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Azure SQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Azure Storage
              </li>
            </ul>
            <li>Google Cloud Platform:</li>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                BigQuery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Firebase
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Google Maps Platform
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillCloud />
                </span>
                Google Analytics
              </li>
            </ul>
          </ul>
          <p className="text-textDark">Frameworks:</p>
          <ul className="list-disc pl-8"> 
          <li>Proficient:</li>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Angular
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Expo
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                React (Next.js)
              </li>
            </ul>
            <li>Intermediate:</li>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2 mt-6 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Express JS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textYellow">
                  <AiFillThunderbolt />
                </span>
                Flask
              </li>
            </ul>
          </ul>
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
}

export default AboutMePage
