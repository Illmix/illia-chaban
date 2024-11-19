import HeaderInfo from "./components/HeaderInfo.tsx";
import NavMenu from "../nav-menu/NavMenu.tsx";

const Header = () => {
    return (
        <header>
            <HeaderInfo/>
            <NavMenu/>
        </header>
    );
};

export default Header;