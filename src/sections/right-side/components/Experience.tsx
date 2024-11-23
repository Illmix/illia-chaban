import {experiences} from "../../../config.ts";
import WorkSectionItem from "../../../components/WorkSectionItem.tsx";

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
        </div>
    );
};

export default Experience;