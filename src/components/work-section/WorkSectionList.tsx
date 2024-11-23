import {IWorkItem} from "../../types/IWorkItem.ts";
import WorkSectionItem from "./WorkSectionItem.tsx";
import {useState} from "react";

interface WorkSectionListProps {
    works: IWorkItem[];
}

const WorkSectionList = ({works}: WorkSectionListProps) => {
    const [hoveredId, setHoveredId] = useState<number | undefined>(undefined);
    return (
        <>
            {works.map((work) =>
                <WorkSectionItem
                    key={work.title}
                    className={hoveredId && hoveredId !== work.id ? "not-active" : ""}
                    onMouseEnter={() => setHoveredId(work.id)}
                    onMouseLeave={() => setHoveredId(undefined)}
                    title={work.title}
                    description={work.description}
                    technologies={work.technologies}
                    link={work.link}
                    picture={work.picture}
                    date={work.date}
                />
            )}
        </>
    );
};

export default WorkSectionList;