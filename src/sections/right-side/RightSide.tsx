import * as React from "react";

interface LeftSideProps {
    children: React.ReactNode;
}

const LeftSide = ({children}: LeftSideProps) => {
    return (
        <div className="right-side">
            {children}
        </div>
    );
};

export default LeftSide;