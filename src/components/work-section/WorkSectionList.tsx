import {IWorkItem} from "../../types/IWorkItem.ts";
import WorkSectionItem from "./WorkSectionItem.tsx";
import {useState} from "react";

interface WorkSectionListProps {
    works: IWorkItem[];
}

const WorkSectionList = ({works}: WorkSectionListProps) => {
    const [hoveredId, setHoveredId] = useState(null);
    return (
        <>
            {works.map((work) =>
                <WorkSectionItem
                    className={hoveredId && hoveredId !== work.id ? "not-active" : ""}
                    onMouseEnter={() => setHoveredId(work.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    title={work.title}
                    description={work.description}
                    technologies={work.technologies}
                    link={work.link}
                    picture={work.picture}
                />
            )}
        </>
    );
};

export default WorkSectionList;