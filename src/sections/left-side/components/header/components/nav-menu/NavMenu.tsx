import NavItem from "./NavItem.tsx";
import {useEffect, useState} from "react";
import useAppSelector from "../../../../../../hooks/useAppSelector.tsx";

const navigationButtons = [{label: 'About', link: '#about'}, {label: 'Experience', link: '#experience'}, {label: 'Projects', link: '#projects'}]
const NavMenu = () => {
    const activeSection = useAppSelector(state => state.observer.activeSection)
    const [activeLink, setActiveLink] = useState('#about');

    const handleNavClick = (link: string) => {
        setActiveLink(link);
    };

    useEffect(() => {
        setActiveLink(`#${activeSection}`)
    }, [activeSection])

    return (
        <ul className="nav-menu flex flex-col gap-[0.8em] list-none uppercase w-max">
            {navigationButtons.map(button =>
                <li key={button.link}>
                    <NavItem
                        offset={button.link === "#about" ? -80 : 80}
                        label={button.label}
                        link={button.link}
                        active={button.link === activeLink}
                        onClick={() => handleNavClick(button.link)}
                    />
                </li>
            )}
        </ul>
    );
};

export default NavMenu;