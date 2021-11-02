import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [state, setState] = useState(false);

    const toggleState = () => setState(!state);

    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количесва рендеров</SmallTitle>
            <Divider/>
            <p>Render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleState}>Toggle to other state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
