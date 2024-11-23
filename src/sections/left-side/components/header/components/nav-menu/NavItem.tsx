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
        <Link to={link} smooth={true} duration={200} offset={offset}>
            <a
                href={link}
                className={`nav-link animate ${active ? "active" : ""}`}
                onClick={onClick}
            >
                <span className="nav-indicator animate"></span>
                <span className="nav-link-text">
                {label}
            </span>
            </a>
        </Link>
    );
};

export default NavItem;