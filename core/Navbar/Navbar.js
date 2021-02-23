import React, { useState, Fragment } from "react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import "./Navbar.css";
import Image from "../../image/logo.png";
import { Button } from "./Button";
// import ShareButton from "react-web-share-button";
import Sharebutton from "./Sharebutton";
import { isAutheticated, signout } from "../../auth/helper/index";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  // var divStyle = {
  //   color: "white",
  //   background: "yellow",
  // };
  let history = useHistory();
  return (
    <div>
      <nav className="navbar border shadow">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            <img
              src={Image}
              className="img-fluid navbar-logo-img"
              alt="image"
            />
          </NavLink>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item-button" onClick={closeMobileMenu}>
              <Sharebutton
                title="My Great Page"
                text="A really great page"
                url="http://www.Divetolearn.in"
              />
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/course"
                exact
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/faculty"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Faculty
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                FAQ's
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Enquiry
              </Link>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/feedback"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Feedback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Aboutus
              </NavLink>
            </li>
            {isAutheticated() && isAutheticated().user.role === 0 && (
              <li className="nav-item d-none">
                <NavLink
                  exact
                  to="/user/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  User Dashboard
                </NavLink>
              </li>
            )}
            {isAutheticated() && isAutheticated().user.role === 1 && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/admin/dashboard"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Admin DashBoard
                </NavLink>
              </li>
            )}
            {!isAutheticated() && (
              <Fragment>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/signin"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Sign in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/signup"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Signup
                  </NavLink>
                </li>
              </Fragment>
            )}
            {isAutheticated() && (
              <li className="nav-item">
                <span
                  className="nav-links"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    signout(() => {
                      history.push("/signin");
                    });
                  }}
                >
                  signout
                </span>
              </li>
            )}
          </ul>
          {button && <Button buttonStyle="btn--outline d-none"></Button>}
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);
