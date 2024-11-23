import {experiences} from "../../../config.ts";
import resume from "../../../assets/Resume.pdf"
import WorkSectionList from "../../../components/work-section/WorkSectionList.tsx";
const Experience = () => {
    return (
        <div className="work-container">
            <div className="observer" id="#experience"></div>
            <h3 className="heading mobile-section-header">EXPERIENCE</h3>
            <WorkSectionList works={experiences}/>
            <a className="resume-link heading" href={resume}>
                <h3><span>View Full Resume</span><span>
                <svg
                    width="1rem" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="animate"
                    aria-hidden="true"><path
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                ></path></svg>
            </span></h3>
            </a>
        </div>
    );
};

export default Experience;