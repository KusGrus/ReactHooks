import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("Render button");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>Exit</button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prev, next) {
    return prev.onLogOut === next.onLogOut;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = () => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, []);
    return (
        <>
            <button className="btn btn-primary" onClick={() => setState(!state)}>Rerender</button>
            <MemoizedLogOutButton onLogOut={handleLogOut}/>
        </>
    );
};

export default MemoWithUseCallbackExample;
