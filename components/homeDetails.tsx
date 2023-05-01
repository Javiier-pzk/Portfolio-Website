import { motion } from "framer-motion";

const HomePageDetails = () => {
  return (
    <section
      id="home"
      className="max-w-cotentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 xs:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textYellow"
      >
        Hello, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col text-textLight"
      >
        Javier Phon Zhee Kai.
        <span className="text-textDark mt-2 lgl:mt-4 text-2xl lgl:text-4xl">
          I am a student, developer and aspiring Software Engineer.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textLight font-medium"
      >
        As a penultimate year Computer Science undergraduate at the National
        University of Singapore with a specialisation in Software Engineering and a minor in Management, 
        I am very passionate about all things tech and is very eager to acquire
        real-world experience in the tech/fintech industry as a Software
        Engineer. Furthermore, I pride myself as a highly motivated, 
        disciplined, and hardworking individual who is easy to work with, 
        always willing to learn, and always open to meeting new people!<br></br>
        <a
          href="https://www.linkedin.com/in/javier-phon-zhee-kai/"
          target="_blank"
        >
          <span className="text-textYellow inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn More
            <span className="absolute w-full h-[1px] bg-textYellow left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/Javiier-pzk" target="_blank">
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textYellow rounded-md text-textYellow tracking-wide hover:bg-hoverColor duration-300"
      >
        View my projects!
      </motion.button>
      </a>
    </section>
  );
};

export default HomePageDetails;