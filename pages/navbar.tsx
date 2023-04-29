import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Javier Phon Zhee Kai</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
                <a
                  className="text-black px-2 py-2 rounded-md ml-2"
                  href="#"
                >
                    About me
                </a>
            </li>
            <li>
                <a
                  className="text-black px-2 py-2 rounded-md ml-2"
                  href="#"
                >
                    Experience
                </a>
            </li>
            <li>
                <a
                  className="text-black px-2 py-2 rounded-md ml-2"
                  href="#"
                >
                    Projects
                </a>
            </li>
            <li>
                <a
                  className="text-black px-2 py-2 rounded-md ml-2"
                  href="#"
                >
                    Education
                </a>
            </li>
            <li>
                <a
                  className="text-black px-2 py-2 rounded-md ml-2"
                  href="#"
                >
                    Contact
                </a>
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 
                        text-white px-2 py-2 rounded-md ml-2"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
