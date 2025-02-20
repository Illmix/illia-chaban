import {projects} from "../../../config.ts";
import WorkSectionList from "../../../components/work-section/WorkSectionList.tsx";
import useAppDispatch from "../../../hooks/useAppDispatch.ts";
import useVisibility from "../../../hooks/useVisibility.ts";
import {useEffect} from "react";
import {setActiveSection} from "../../../store/reducers/observerReducer.ts";

const Projects = () => {
    const dispatch = useAppDispatch();
    const [ref, isVisible] = useVisibility<HTMLDivElement>(0.1); // 10% threshold

    useEffect(() => {
        if (!isVisible)
            dispatch(setActiveSection({activeSection: 'experience'}))
        else
            dispatch(setActiveSection({activeSection: 'projects'}))
    }, [isVisible])

    return (
        <div className="work-container flex flex-col gap-8 relative">
            <h3 className="heading mobile-section-header">PROJECTS</h3>
            <WorkSectionList works={projects}/>
            <div className="observer" ref={ref} style={{bottom: '-5rem'}} id="#projects"></div>
        </div>
    );
};

export default Projects;