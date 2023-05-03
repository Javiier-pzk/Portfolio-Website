import SectionTitle from "./sectionTitle";

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="max-w-containerSmall mx-auto py-32 xs:px-10 xl:px-4"
    >
      <SectionTitle title="Contact"/>
      <div className="mt-6 flex flex-col gap-4 items-center justify-center">
      <p className="font-titleFont text-lg text-textYellow font-semibold flex items-center tracking-wide">
        What&rsquo;s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Whether you have a question, job opportunity, 
        or just want to say hi, drop me an email and 
        I will get back to you as soon as possible!
      </p>
      <a href="mailto:javierphon@gmail.com">
      <button className="w-40 h-14 border border-textYellow mt-6 font-titleFont text-textYellow tracking-wider rounded-md hover:bg-hoverColor duration-300">
        Say Hi!
      </button>
      </a>
      </div>
    </section>
  );
};

export default ContactPage;
