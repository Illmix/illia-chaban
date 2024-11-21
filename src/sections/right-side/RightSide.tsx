import * as React from "react";

interface RightSideProps {
    children: React.ReactNode;
}

const RightSide = ({children}: RightSideProps) => {
    return (
        <div className="right-side">
            {children}
        </div>
    );
};

export default RightSide;