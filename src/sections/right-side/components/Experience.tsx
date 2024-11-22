
const technologies = ["JavaScript", "TypeScript", "HTML & CSS", "React", "Next.js", "Flask"]
const Experience = () => {
    return (
        <div className="experience-container">
            <div className="experience-item">
                <span className="experience-dates">
                    07.2023 - 11.2024
                </span>
                <div className="experience-description">
                    <h3>Fullstack Developer · HomeKlick GmbH</h3>
                    <p className="experience-text">
                        Build, style, and ship high-quality websites.
                        Work closely with cross-functional teams, including developers, designers, and product managers,
                        to implement and advocate for best practices in web accessibility.
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
        </div>
    );
};

export default Experience;