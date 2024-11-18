import * as React from "react";

interface LeftSideProps {
    children: React.ReactNode;
}

const LeftSide = ({children}: LeftSideProps) => {
    return (
        <div className="left-side">
            {children}
        </div>
    );
};

export default LeftSide;