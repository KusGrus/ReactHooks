import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammablActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => inputRef.current.focus();

    const handleClickResize = () => (inputRef.current.style.width = `100px`);

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider/>
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} type="email" className="form-control" id="email"/>
            <button className="btn btn-primary mt-2" onClick={handleClick}>Button</button>
            <button className="btn btn-primary mt-2" onClick={handleClickResize}>Resize</button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
