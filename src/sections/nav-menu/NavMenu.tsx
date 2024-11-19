import NavItem from "./components/NavItem.tsx";
import {useState} from "react";

const navigationButtons = [{label: 'About', link: '#about'}, {label: 'Experience', link: '#experience'}, {label: 'Projects', link: '#projects'}]
const NavMenu = () => {
    const [activeLink] = useState('#about');
    return (
        <ul className="nav-menu">
            {navigationButtons.map(button =>
                <li key={button.link}>
                    <NavItem label={button.label} link={button.link} active={button.link === activeLink}/>
                </li>
            )}
        </ul>
    );
};

export default NavMenu;