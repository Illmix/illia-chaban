import * as React from "react";

interface RightSideProps {
    children: React.ReactNode;
}

const RightSide = ({children}: RightSideProps) => {
    return (
        <div className="right-side flex flex-col w-full max-w-[550px] py-20 items-center gap-[8rem]">
            {children}
        </div>
    );
};

export default RightSide;