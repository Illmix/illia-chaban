import * as React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="layout-container">
            {children}
        </div>
    );
};

export default Layout;