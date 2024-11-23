import {projects} from "../../../config.ts";
import WorkSectionList from "../../../components/work-section/WorkSectionList.tsx";

const Projects = () => {
    return (
        <div className="work-container">
            <WorkSectionList works={projects}/>
        </div>
    );
};

export default Projects;