import React from "react";
import "./Helper/project.scss";
import icon from "./Helper/images/A U.svg";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container text-align-center">
          <a href="#" className="navbar-brand ">
            <img src={icon} /> <span className="header">AWESOME UI</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navmenu">
            <ul className="navbar-nav ms-auto align-items-center ">
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  <span className="capitalize">CONTACT US</span>
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  STORE
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  USE CASES
                </a>
              </li>
              <button className="btn btn-lg text-white rounded">
                REGISTER
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
