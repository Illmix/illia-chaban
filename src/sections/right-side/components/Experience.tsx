
const technologies = ["JavaScript", "TypeScript", "HTML & CSS", "React", "Next.js", "Flask"]
const Experience = () => {
    return (
        <div className="experience-container">
            <a href="https://home-klick.de" target="_blank">
                <div className="experience-item animate">
                <span className="experience-dates">
                    JULY 2023 — NOV 2024
                </span>
                    <div className="experience-description">
                        <h3 className="heading animate"><span>Fullstack Developer · HomeKlick GmbH </span><span><svg
                            width="1rem" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"><path
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"></path></svg></span></h3>
                        <p className="experience-text">
                            Build, style, and ship high-quality websites.
                            Work closely with cross-functional teams, including developers, designers, and product
                            managers,
                            to implement best approaches in web development.
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
        </div>
    );
};

export default Experience;