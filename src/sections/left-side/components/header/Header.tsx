import HeaderInfo from "./components/HeaderInfo.tsx";
import NavMenu from "./components/nav-menu/NavMenu.tsx";

const Header = () => {
    return (
        <header className="header flex flex-col gap-[4rem]">
            <HeaderInfo/>
            <NavMenu/>
        </header>
    );
};

export default Header;