import Head from "next/head";
import NavBar from "../components/navbar";
import AboutMePage from "@/components/about";
import HomePageDetails from "@/components/homeDetails";
import LeftBar from "@/components/leftBar";
import ExperiencePage from "@/components/experience/experience";
import ProjectsPage from "@/components/projects/projects";
import CertificationsPage from "@/components/certifications/certifications";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Javiier-pzk</title>
        <link rel="icon" href="/assets/images/j-icon.png"></link>
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight 
                      overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <NavBar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <LeftBar />
          <div className="h-[88vh] w-full mx-auto p-4">
            <HomePageDetails />
            <AboutMePage />
            <ExperiencePage />
            <ProjectsPage />
            <CertificationsPage />
            <ContactPage />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
