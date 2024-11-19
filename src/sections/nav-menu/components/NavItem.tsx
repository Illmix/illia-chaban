interface NavItemsProps {
    label: string;
    link: string;
    active: boolean;
}

const NavItem = ({label, link, active}: NavItemsProps) => {
    return (
        <a href={link} className={"nav-link " + (active ? "active" : "")}>
            <span className="nav-indicator"></span>
            <span className="nav-link-text">
                {label}
            </span>
        </a>
    );
};

export default NavItem;