import ProjectCard from "./projectCard"
import SectionTitle from "../sectionTitle"

const ProjectsPage = () => {
    return (
        <section 
            id="projects"
            className="max-w-containerSmall mx-auto py-24 mdl:py-32 xs:px-10 xl:px-4"
        >
            <SectionTitle title="Projects"/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                <ProjectCard 
                    projectTitle="Productivity Police" 
                    projectDescription="A mobile productivity app built for iOS devices that consists of some of the more important productivity features that any student might require."
                    projectUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/Productivity-Police`}
                    projectTechStack={["React Native (Expo)", "Firebase"]}
                />
                <ProjectCard 
                    projectTitle="dfmn_bot" 
                    projectDescription="A telegram bot that helps you make decisions or provides recommendations for you."
                    projectUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/dfmn_bot`}
                    projectTechStack={["pyTelegramBotAPI", "Heroku", "Google Maps Platform", "python"]}
                />
                <ProjectCard 
                    projectTitle="Truffle" 
                    projectDescription="A Lightweight SQL management library for C#."
                    projectUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/Truffle`}
                    projectTechStack={["C#"]}
                />
                <ProjectCard 
                    projectTitle="Restaurant HR Helper" 
                    projectDescription="A desktop app built as part of a school project for restaurant managers to manage their employees, suppliers and customers. It optimized for use via a Command Line Interface."
                    projectUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/tp`}
                    projectTechStack={["Java", "JavaFX", "Gradle"]}
                />
                <ProjectCard 
                    projectTitle="Duke" 
                    projectDescription="An interactive chat bot desktop app bulit as part of a school project that helps you keep track of your todos, deadlines and events."
                    projectUrl={`${process.env.NEXT_PUBLIC_GITHUB_URL}/ip`}
                    projectTechStack={["Java", "JavaFX", "Gradle"]}
                />
            </div>
            
        </section>
    )
}

export default ProjectsPage