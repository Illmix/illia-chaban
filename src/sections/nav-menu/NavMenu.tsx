const NavMenu = () => {
    return (
        <ul className="nav-menu">
            <li className="nav-menu-item">
                <a className="nav-link active">
                    <span className="nav-indicator"></span>
                    <span className="nav-link-text">
                        About
                    </span>
                </a>
            </li>
            <li>
                <a className="nav-link">
                    <span className="nav-indicator"></span>
                    <span className="nav-link-text">
                        Experience
                    </span>
                </a>
            </li>
            <li>
                <a>
                    Projects
                </a>
            </li>
        </ul>
    );
};

export default NavMenu;