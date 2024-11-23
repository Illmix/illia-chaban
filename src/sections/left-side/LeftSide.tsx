import * as React from "react";

interface LeftSideProps {
    children: React.ReactNode;
}

const LeftSide = ({children}: LeftSideProps) => {
    return (
        <div className="left-side">
            <div className="left-side-wrapper">
                {children}
            </div>
        </div>
    );
};

export default LeftSide;