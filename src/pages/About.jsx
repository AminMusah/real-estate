import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

function About() {
  return (
    <div>
      <Header />
      <section className="section about" id="about">
        <div className="container">
          <div className="about-content">
            <p
              className="section-subtitle reveal-left"
              id="about-label"
            >
              About Us
            </p>

            <h2 className="h2 section-title reveal-left" >
            The Leading Real Estate Rental Marketplace.
            </h2>

            <p className="section-text reveal-left" >
            Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
            </p>

            <div className="about-card reveal-left" >
              <figure
                className="card-banner img-holder"
              >
              </figure>

              <p className="card-text">
              Find Your Dream House By Us
              </p>
            </div>
          </div>

          <figure className="about-banner reveal-right">
            <img
              src="/images/blog-1.png"
              width="686"
              height="544"
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
