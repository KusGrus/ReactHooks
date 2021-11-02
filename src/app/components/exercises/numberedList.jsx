import React from "react";

const NumberedList = ({ children }) => {
    const basedStyle = { display: "inline-block" };
        const basedClass = "m-1";
    return React.Children.map(children, (child, idx) => {
        return (
            <div className="block mt-3">
                <span className={basedClass} style={basedStyle}>{idx + 1}</span>
                <span className={basedClass} style={basedStyle}>{child}</span>
            </div>
        );
    });
};

export default NumberedList;
