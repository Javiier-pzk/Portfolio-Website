import SectionTitle from "./sectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";
import profilePic from "../public/assets/images/profile-pic.jpeg";

export default function AboutMePage() {
  return (
    <section
      id="#about"
      className=" max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>Some garbage text</p>
          <p>Here are my skills and proficiencies:</p>
          <p>Programming languages:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
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
