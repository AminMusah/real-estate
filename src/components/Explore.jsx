import React from "react";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import { Link } from "react-router-dom";

function Explore() {
  return (
    <div>
      <section className="section cta has-bg-image">
        {" "}
        <div className="container">
          <div>
            <p className="section-subtitle reveal-left">
              Looking For A Dream Home?
            </p>

            <h2 className="h2 section-title reveal-left" id="cta-label">
              We can help you realize your dream of a new home
            </h2>
          </div>

          <Link to="/properties" className="btn btn-primary reveal-right">
            <span className="span">Explore</span>

            <ArrowRightSLineIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Explore;
