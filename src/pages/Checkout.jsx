import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import paystackPop from "@paystack/inline-js";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

function Checkout() {
  const { items, total } = useContext(CartContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(10);
  const payWithPaystack = (e) => {
    e.preventDefault();
    const payStack = new paystackPop();
    payStack.newTransaction({
      key: "pk_test_26b8ff5d42befde7b35e08f9f379b26ef3e2c1c2",
      firstName,
      lastName,
      amount: amount * 100,
      email,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setAmount("");
        setEmail("");
        setFirstName("");
        setLastName("");
      },
      onCancel() {
        alert(`You have canceled your transaction!`);
      },
    });
  };
  return (
    <div>
      <Header />
      <section className="section about" id="about">
        <div className="container">
          <div className="about-content">
            {/* <p className="section-subtitle reveal-left" id="about-label">
              Item
            </p> */}

            {/* <h2 className="h2 section-title reveal-left">Details</h2>

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
            </ul> */}
          </div>
{/* 
          <figure className="about-banner reveal-right">
            <img
              src="/images/blog-1.png"
              width="686"
              height="544"
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure> */}
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
              placeholder="First Name.."
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Last Name.."
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              type="email"
              id="fname"
              name="Email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              id="fname"
              name="Amount"
              placeholder="Amount"
              required
              value={total(items)}
              onChange={(e) => setAmount(e.target.value)}
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
          {/* <div className="input-wrapper">
            <textarea
              id="message"
              name="Message"
              placeholder="Your Message.."
              required
            ></textarea>
          </div> */}

          <button
            type="submit"
            className="btn btn-secondary contact-button"
            onClick={payWithPaystack}
          >
            <span className="span">Submit</span>
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default Checkout;
