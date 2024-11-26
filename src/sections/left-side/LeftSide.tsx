import * as React from "react";

interface LeftSideProps {
    children: React.ReactNode;
}

const LeftSide = ({children}: LeftSideProps) => {
    return (
        <div className="left-side flex flex-col w-full max-w-[550px] py-20">
            <div className="left-side-wrapper flex flex-col justify-between h-[89svh] fixed">
                {children}
            </div>
        </div>
    );
};

export default LeftSide;