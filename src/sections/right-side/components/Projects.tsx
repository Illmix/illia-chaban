import {projects} from "../../../config.ts";
import WorkSectionItem from "../../../components/work-section/WorkSectionItem.tsx";

const Projects = () => {
    return (
        <div className="work-container">
            {projects.map((project) =>
                <WorkSectionItem
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                    picture={project.picture}
                />
            )}
        </div>
    );
};

export default Projects;