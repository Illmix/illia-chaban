import { Link } from 'react-scroll';

interface NavItemsProps {
    label: string;
    link: string;
    active: boolean;
    onClick: () => void;
    offset?: number
}

const NavItem = ({label, link, active, onClick, offset}: NavItemsProps) => {
    return (
        <Link to={link} smooth={true} duration={200} offset={offset} onClick={onClick}>
            <span className={`nav-link animate ${active ? "active" : ""}`}>
                <span className="nav-indicator animate w-[2rem] h-[0.005rem] bg-[var(--heading-color)]"></span>
                <span className="nav-link-text">
                    {label}
                </span>
            </span>
        </Link>
    );
};


export default NavItem;