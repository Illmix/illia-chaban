import {projects} from "../../../config.ts";
import WorkSectionList from "../../../components/work-section/WorkSectionList.tsx";
import useAppDispatch from "../../../hooks/useAppDispatch.ts";
import useVisibility from "../../../hooks/useVisibility.ts";
import {useEffect} from "react";
import {setActiveSection} from "../../../store/reducers/observerReducer.ts";
import useAppSelector from "../../../hooks/useAppSelector.tsx";

const Projects = () => {
    const dispatch = useAppDispatch();
    const [ref, isVisible] = useVisibility<HTMLDivElement>(0.1); // 10% threshold

    useEffect(() => {
        if (!isVisible)
            dispatch(setActiveSection({activeSection: 'experience'}))
        else
            dispatch(setActiveSection({activeSection: 'projects'}))
    }, [isVisible])

    const activeSection = useAppSelector(state => state.observer.activeSection)

    console.log(activeSection)
    return (
        <div className="work-container">
            <WorkSectionList works={projects}/>
            <div className="observer" ref={ref} style={{bottom: '-5rem'}} id="#projects"></div>
        </div>
    );
};

export default Projects;