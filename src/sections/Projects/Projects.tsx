import ProjectsCarrousel from "./Carrousel/Carrousel"
import styles from './projects.module.css'

const Projects = () => {
    return (
        <section className={`py-12 md:py-24 ${styles.projects}`} id='projects'>
            <div className="w-fit mx-auto">
                <h2 className="text-primary text-5xl font-ubuntu">Projects</h2>
                <div className="w-full flex items-center pt-1">
                    <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
                    <hr className="w-full border-none bg-primary h-px" />
                    <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
                </div>
            </div>
            <p className="text-center mt-3 text-white font-ibm text-xs">I had the pleasure of worked on these beautiful projects</p>
            <ProjectsCarrousel />
        </section>
    )
}

export default Projects