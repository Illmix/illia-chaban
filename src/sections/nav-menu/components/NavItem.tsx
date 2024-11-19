interface NavItemsProps {
    label: string;
    link: string;
    active: boolean;
    onClick: () => void;
}

const NavItem = ({label, link, active, onClick}: NavItemsProps) => {
    return (
        <a
            href={link}
            className={`nav-link ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="nav-indicator"></span>
            <span className="nav-link-text">
                {label}
            </span>
        </a>
    );
};

export default NavItem;