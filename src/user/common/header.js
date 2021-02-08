import React, { Component } from "react";
import "../style/home/home.scss";

const Header = ({props,login,onHide}) => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img
            className="header-left-logo"
            src={require("../assets_user/Logo.PNG")}
          />
        </div>
        <div className="header-center">
          <div className="header-pembungkus-search">
            <input
              className="header-search"
              type="text"
              placeholder="Daerah...."
            />
            <div className="wrapper-header-search-logo">
              <img
                className="header-center-logo-search"
                src={require("../assets_user/Vector.png")}
              />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="header-signin" onClick={props.login}>
            <p className="Text-sigin">Sign in</p>
          </div>
          <div className="header-signup">
            <p className="Text-signup">Sign up</p>
          </div>
          {/* <div className="wrapper-img-after-login">
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              src={require("../assets_user/afterlogin-image.jpg")}
            />
          </div> */}
        </div>
      </div>
      {/* /Signin */}
    </>
  );
};

export default Header;
