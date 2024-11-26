import * as React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <div className="max-w-[var(--page-width)] flex justify-center gap-12 mx-auto">
            {children}
        </div>
    );
};

export default Layout;