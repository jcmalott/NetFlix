import React from "react";
import backgroundImage from "../../images/bg.jpg";
import logo from "../../icons/logo.svg";

const BasicBackground = () => {
  return (
    <div>
      <div className="login-background">
        <img className="login-image" src={backgroundImage} alt="Movie posters"></img>
        <div className="register-image-gradient"></div>
      </div>

      <div className="login-header">
        <a href="/"><img src={logo} alt="logo"></img></a>
      </div>
    </div>
  );
}


export default BasicBackground;
