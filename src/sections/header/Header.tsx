import HeaderInfo from "./components/HeaderInfo.tsx";
import NavMenu from "../nav-menu/NavMenu.tsx";

const Header = () => {
    return (
        <header className="header">
            <HeaderInfo/>
            <NavMenu/>
        </header>
    );
};

export default Header;