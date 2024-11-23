import {experiences} from "../../../config.ts";
import WorkSectionItem from "../../../components/WorkSectionItem.tsx";
import resume from "../../../assets/Resume.pdf"
const Experience = () => {
    return (
        <div className="work-container">
            {experiences.map((e) =>
                <WorkSectionItem
                    title={e.title}
                    description={e.description}
                    technologies={e.technologies}
                    link={e.link}
                    date={e.date}
                />
            )}
            <a className="resume-link heading" href={resume}><h3><span>View Full Resume</span><span>
                <svg
                    width="1rem" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="animate"
                    aria-hidden="true"><path
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path></svg>
            </span></h3>
            </a>
        </div>
    );
};

export default Experience;