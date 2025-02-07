import useVisibility from "../../../hooks/useVisibility.ts";
import {useEffect} from "react";
import useAppDispatch from "../../../hooks/useAppDispatch.ts";
import {setActiveSection} from "../../../store/reducers/observerReducer.ts";

const Summary = () => {
    const dispatch = useAppDispatch();
    const [ref, isVisible] = useVisibility<HTMLDivElement>(0.1); // 10% threshold

    useEffect(() => {
        if (!isVisible)
            dispatch(setActiveSection({activeSection: 'experience'}))
        else
            dispatch(setActiveSection({activeSection: 'about'}))
    }, [isVisible])

    return (
        <div className="summary-container flex flex-col gap-8 relative">
            <div className="observer" ref={ref} id="#about"></div>
            <h3 className="heading mobile-section-header">ABOUT</h3>
            <p className="summary-text">
                I'm a 20 year old fullstack developer with 2 years of full-time experience. Proficient in both front-end and back-end devel-
                opment, with expertise in React, Next.js, TypeScript, Flask, MongoDB. Strong problem-solving abilities, a keen eye for
                detail, and dedicated to creating robust and scalable applications.
                I grow through challenges and strengthen through repetition.
            </p>
            <p className="summary-text">
                Relocated to Germany in 2022 due to the Russian invasion of Ukraine. Successfully completed an
                Associate Degree in Computer Science remotely from a Ukrainian college. Subsequently, joined <strong className="heading">HomeKlick
                GmbH</strong>, a small IT company, where I worked as a <strong className="heading">Full Stack Developer</strong> for nearly
                two years. My
                role primarily focused
                on <strong className="heading">frontend development (80%)</strong> with additional backend responsibilities (20%). Key
                contributions included
                developing
                and maintaining <strong className="heading">dynamic, responsive websites</strong> enhancing user interfaces to ensure
                seamless interactions,
                and optimizing APIs and database structures to improve system reliability and scalability.
            </p>
            <p className="summary-text">
                In my spare time, I’m usually hanging out with my friends, reading or playing video games.
            </p>
        </div>
    );
};

export default Summary;
