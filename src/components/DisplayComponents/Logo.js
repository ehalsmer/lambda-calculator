import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" style={{backgroundColor: "#7a1920"}} />
    </div>
  );
};

export default Logo;
