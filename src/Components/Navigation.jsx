import React from "react";
import logo from "../assets/img/logo.jpg";

const Navigation = () => {
  return (
    <>
      <div className="row">
        <div className="nav">
          <a href="/" className="nav__logo">
            <img src={logo} data-testid="logo" />
          </a>
          <ul className="nav__ul">
            <li>
              <a
                href="/login"
                className="button"
                data-testid="login"
                data-color="blue"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="button"
                data-testid="signup"
                data-color="pink"
              >
                Signup
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
