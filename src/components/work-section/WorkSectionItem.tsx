import {IWorkItem} from "../../types/IWorkItem.ts";
import {MouseEventHandler} from "react";

interface WorkSectionItemProps extends IWorkItem {
    className?: string;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

const WorkSectionItem = ({
                         title,
                         description,
                         technologies,
                         date,
                         picture,
                         onMouseEnter,
                         onMouseLeave,
                         className,
                         link
}: WorkSectionItemProps) => {
    return (
        <a href={link} target="_blank">
            <div className={`work-section-item flex gap-6 cursor-pointer relative
             animate ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {date &&
                    <span className="work-section-dates whitespace-nowrap text-[0.8rem] text-left mt-[0.2rem]">
                        {date}
                    </span>
                }
                {picture &&
                    <img className="work-picture animate" src={picture} alt="title"/>
                }
                <div className="work-section-description flex flex-col gap-[0.4rem] flex-grow">
                    <h3 className="heading animate"><span>{title}</span><span><svg
                        width="1rem" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="animate"
                        aria-hidden="true"><path
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        ></path></svg></span></h3>
                    <p className="work-section-text">
                        {description}
                    </p>
                    <div className="technologies">
                        <ul className="technologies-list">
                            {
                                technologies.map(tech =>
                                    <li key={tech} className="technologies-item">
                                        {tech}
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default WorkSectionItem;