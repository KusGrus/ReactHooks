import React from "react";
import CardWrapper from "../common/Card";
import SmallTitle from "../common/typografy/smallTitle";

const withModify = (Component) => (props) => {
    const isAuth = localStorage.getItem("user");
    return (
        <CardWrapper>
            <SmallTitle>HOC exercises</SmallTitle>
            <Component {...props} isAuth={isAuth}/>
        </CardWrapper>
    );
};

export default withModify;
