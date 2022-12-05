import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Checkout() {
  return (
    <div>
      <Header />
      <section className="section about" id="about">
        <div className="container">
          <div className="about-content">
            {/* <p className="section-subtitle reveal-left" id="about-label">
              Item
            </p> */}

            <h2 className="h2 section-title reveal-left">
              Details
            </h2>

            <ul className="footer-list">

              <li className="footer-list-item">
                <p>Lorem ipsum dolor sit.</p>

              </li>

              <li className="footer-list-item">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

              </li>

              <li className="footer-list-item">
                <p>Lorem, ipsum dolor.</p>
              </li>
              <li className="footer-list-item">
                <p>Lorem, ipsum dolor.</p>
              </li>
            </ul>
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
      <section className="contact" id="appointment">
        <h2 className="main-team reveal-left">Payment</h2>

        <form className="contact-form">
          <div className="input-wrapper">
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Full Name.."
              required
            />
            <input
              type="tel"
              id="phone"
              name="Phone Number"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              id="fname"
              name="Email"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              id="fname"
              name="Amount"
              placeholder="Amount"
              required
            />
            {/* <select name="Service" id="service" className="input-field" required>
              <option value="Property Management">Property Management</option>
              <option value="Real Estate Brokage">Real Estate Brokage</option>
              <option value="Property Development">
                Property Development
              </option>
              <option value="Enquiry">Enquiry</option>
            </select> */}
          </div>
          <div className="input-wrapper">
            <textarea
              id="message"
              name="Message"
              placeholder="Your Message.."
              required
            ></textarea>
          </div>

          <button className="btn btn-secondary contact-button">
            <span className="span">Submit</span>
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Checkout;
