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
            <span className={`nav-link group animate ${active ? "active" : ""} flex items-center gap-[0.6rem]
             cursor-pointer opacity-50 hover:opacity-100`}>
                <span className="nav-indicator group-hover:w-[4rem]
                 animate w-[2rem] h-[0.005rem] bg-[var(--heading-color)]"></span>
                <span className="nav-link-text">
                    {label}
                </span>
            </span>
        </Link>
    );
};


export default NavItem;