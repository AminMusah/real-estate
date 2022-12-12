import React from "react";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <section
        className="section hero has-bg-image"
        id="home"
      >
        <div className="container">
          <p className="section-subtitle has-before reveal-left" >
            Welcome to the Real Estate Agency
          </p>

          <h1 className="h1 hero-title reveal-left" id="hero-label" >
          Find Your Dream House By Us
          </h1>

          <div className="btn-group reveal-left" >
            <Link to="/properties" className="btn btn-primary">
              <span className="span">Explore more</span>

              <ArrowRightSLineIcon size={15} />
            </Link>

            {/* <a href="#" className="btn btn-secondary">
              <span className="span">Get delivery</span>

              <ArrowRightSLineIcon size={15} />
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
