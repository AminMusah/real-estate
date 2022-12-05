import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WhatsappFillIcon from 'remixicon-react/WhatsappFillIcon'
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'

function Contact() {
  return (
    <div>
      <Header/>
      <section className="section service">
        <div className="container">

          <ul className="grid-list">

            <li>
              <a href="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/sendmail.avif" width="450" height="350" loading="lazy" alt="Buy a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <MailLineIcon/>

                  <h3 className="h3 card-title">Email Us</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/call.avif" width="450" height="350" loading="lazy" alt="rent a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <PhoneLineIcon/>

                  <h3 className="h3 card-title">Call us</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/whatsapp.avif" width="450" height="350" loading="lazy" alt="Sell a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <WhatsappFillIcon/>

                  <h3 className="h3 card-title">Message Us On Whatsapp</h3>
                </div>

              </a>
            </li>

          </ul>

        </div>
      </section>
         <section className="contact" id="appointment">
          <h2 className="main-team reveal-left" >Contact Us</h2>

          <form
            className="contact-form"
          >
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
              <select name="Service" id="service" className="input-field" required>
                <option value="Property Management">Property Management</option>
                <option value="Real Estate Brokage">Real Estate Brokage</option>
                <option value="Property Development">
                  Property Development
                </option>
                <option value="Enquiry">Enquiry</option>
              </select>
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
              <span className="span">Send Message</span>
            </button>
          </form>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact