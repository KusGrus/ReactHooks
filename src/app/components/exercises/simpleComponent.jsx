import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, isAuth, onLogOut }) => {
    let buttonTitle = "Вход";
    let buttonFunc = onLogin;

    if (isAuth) {
        buttonTitle = "Выйти из системы";
        buttonFunc = onLogOut;
    }
    return (
        <button className="btn btn-primary mt-4" onClick={buttonFunc}>{buttonTitle}</button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
