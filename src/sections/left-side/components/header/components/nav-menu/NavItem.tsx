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
            className={`nav-link animate ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="nav-indicator animate"></span>
            <span className="nav-link-text">
                {label}
            </span>
        </a>
    );
};

export default NavItem;