import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../image/logo.png";
import ShopOutlinedIcon from "@material-ui/icons/ShopOutlined";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import "../../styles.scss";

const Footer = () => {
  const currYear = new Date();
  const Year = currYear.getFullYear();
  return (
    <div>
      <div className="Footer_bg py-md-5 py-4 shadow">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 Footer_column1">
              <img src={Logo} alt="Logo" className="Footer_logo" />
              <NavLink to="/" className="Footer_bg_navlink">
                <p>
                  403, Shiv Darshan Deepak hospital lane Near Family care
                  hospital Mira Bhaynder east - 401105 Mumbai Maharashtra.
                </p>
              </NavLink>
              <NavLink to="/" className="Footer_bg_navlink">
                <p>
                  <a href="tel:+919137336685">+91-9137336685</a>
                </p>
              </NavLink>
              <NavLink to="/" className="Footer_bg_navlink">
                <p>
                  <a href="mailto:Hr@divtolearn.com">Hr@divtolearn.com</a>
                </p>
              </NavLink>
            </div>
            <div className="col-lg-6">
              <div className="row Footer_Top_Category ">
                <div className="col-lg-6 col-12 ">
                  <h5>Top Locations</h5>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Mumbai</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Delhi</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Kolkata</p>
                  </NavLink>
                  {/* <NavLink to="/" className="Footer_bg_navlink">
                    <p>Banglor</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Bhopal</p>
                  </NavLink> */}
                </div>
                {/* <div className="col-lg-4 col-12">
                  <h5>Top Subjects</h5>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Math Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>English Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Science Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Accountancy Tutors</p>
                  </NavLink>
                  <NavLink to="/" className="Footer_bg_navlink">
                    <p>Online Classes</p>
                  </NavLink>
                </div> */}
                <div className="col-lg-6 col-12">
                  <h5>Work With Us</h5>
                  <a
                    href="mailto:Hr@divtolearn.com"
                    className="Footer_bg_navlink"
                  >
                    <p>Do You want to teach</p>
                  </a>
                  <a
                    href="mailto:Hr@divtolearn.com"
                    className="Footer_bg_navlink"
                  >
                    <p>Work With us</p>
                  </a>
                  <a
                    href="mailto:Hr@divtolearn.com"
                    className="Footer_bg_navlink"
                  >
                    <p>Contact us</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 Footer_App">
              <h5>Download App</h5>
              <NavLink to="/" className="Footer_bg_navlink">
                <div className="Google_App">
                  <ShopOutlinedIcon className="App_icone" />
                  <h2>Google play</h2>
                  <p>(* Get it now *)</p>
                </div>
              </NavLink>
              <NavLink to="/" className="Footer_bg_navlink">
                <div className="Google_App">
                  <AppleIcon className="App_icone" />
                  <h2>Apple store </h2>
                  <p>(* Coming Soon *)</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_bottom ">
        <div> Copyright © {Year}</div>
        <div>
          <a href="https://www.facebook.com/Shreyajha8">
            <FacebookIcon className="Footer_bottom_icon_facebook" />
          </a>
          <a href="/">
            <TwitterIcon className="Footer_bottom_icon_twitter" />
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=eion4t6vi7hh&utm_content=hxvbr7l">
            <InstagramIcon className="Footer_bottom_icon_instagram" />
          </a>
          <a href="/">
            <LinkedInIcon className="Footer_bottom_icon_linkedin" />
          </a>
          <a href="https://t.me/Divetolearn">
            <TelegramIcon className="Footer_bottom_icon_telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
