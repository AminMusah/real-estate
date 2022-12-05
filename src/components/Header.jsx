import React, { useState } from "react";
import TimeLineIcon from "remixicon-react/TimeLineIcon";
import FacebookLineIcon from "remixicon-react/FacebookLineIcon";
import TwitterLineIcon from "remixicon-react/TwitterLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import { Link } from "react-router-dom";



function Header() {
  const [openMenu,setOpenMenu] = useState(false)
  const [header,setHeader] = useState(false)

  const menuOpen = () => {
    setOpenMenu(!openMenu)
  }

  const headerTop = () => {
    setHeader(!openMenu)
  }
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <p class="header-top-text">
            <TimeLineIcon size={15} /> <span class="span">Opening Hours :</span>{" "}
            08:00 Am - 09:00 Pm
          </p>

          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <FacebookLineIcon size={15} />{" "}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <TwitterLineIcon size={15} />{" "}
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <InstagramLineIcon size={15} />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <YoutubeLineIcon size={15} />
              </a>
            </li>
          </ul>

          <p class="header-top-text">
            <MapPinLineIcon size={15}/>
            <span className="span">Location :</span> Banana In, Dansoman
          </p>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <Link to="/" className="logo">
            <h3>Real Estate</h3>
            {/* <img src="./assets/images/logo.svg" width="216" height="80" alt="keofi home" class="w-100"> */}
          </Link>

          <nav className={`navbar ${openMenu? 'navbar-active' : ''}`}>
            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/service" className="navbar-link">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/properties" className="navbar-link">
                  Property
                </Link>
              </li>
              <li>
                <Link to="/about" className="navbar-link">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="navbar-link">
                  Contacts
                </Link>
              </li>
            </ul>

            <Link to="/contact" className="btn btn-primary">
              Make An Enquiry
            </Link>
          </nav>

          <button className="nav-open-btn" onClick={menuOpen}>
            <span className="span"></span>
            <span className="span"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
