import React from "react";
import logo from "../assets/img/logo.jpg";

const Navigation = () => {
  return (
    <>
      <div className="row">
        <div className="nav"></div>
        <a href="/">
          <img src={logo} data-testid="logo" />
        </a>
        <ul>
          <li>
            <a href="/login" data-testid="login">
              Login
            </a>
          </li>
          <li>
            <a href="/signup" data-testid="signup">
              Signup
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
