import React from 'react'
import Map2LineIcon from 'remixicon-react/Map2LineIcon'
import MailLineIcon from 'remixicon-react/MailLineIcon'
import PhoneLineIcon from 'remixicon-react/PhoneLineIcon'

function Footer() {
  return (
    <div>
          <footer className="footer">
    <div className="container">

      <div className="footer-top section">

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Working Hours</p>
          </li>

          <li className="footer-list-item">
            <p>Sunday - Thursday</p>

            <span className="span">08:00 am - 09:00pm</span>
          </li>

          <li className="footer-list-item">
            <p>Only Friday</p>

            <span className="span">03:00 pm - 09:00pm</span>
          </li>

          <li>
            <strong className="strong">Saturday Close</strong>
          </li>

        </ul>
        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Services</p>
          </li>

          <li className="footer-list-item">
            <p>Wish List</p>

            {/* <span className="span">08:00 am - 09:00pm</span> */}
          </li>

          <li className="footer-list-item">
            <p>My Account</p>

            {/* <span className="span">03:00 pm - 09:00pm</span> */}
          </li>

          <li   className="footer-list-item">
            <p >Terms and Conditions</p>
          </li>
          <li  className="footer-list-item">
            <p>Promotional Offers</p>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Contact Us</p>
          </li>

          <li>
            <div className="wrapper">
              <Map2LineIcon/>

              <div>
                <span className="span">Location :</span>

                <p>Banana in, Dansoman</p>
              </div>
            </div>
          </li>

          <li>
            <div className="wrapper">
              <MailLineIcon/>

              <div>
                <span className="span">Email Address :</span>

                <p>realestate@gmail.com</p>
              </div>
            </div>
          </li>

          <li>
            <div className="wrapper">
              <PhoneLineIcon/>

              <div>
                <span className="span">Phone Number :</span>

                <p>+012 (345) 678 99</p>
              </div>
            </div>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Gallery</p>
          </li>

          <li>
            <ul className="grid-list">

              <li>
                <div className="grid-item">
                  <img src="/images/serenti24.jpg" width="80" height="80" loading="lazy" alt="Gallery"
                    className="w-100"/>
                </div>
              </li>

              <li>
                <div className="grid-item">
                  <img src="/images/serenti31.jpg" width="80" height="80" loading="lazy" alt="Gallery"
                    className="w-100"/>
                </div>
              </li>

              <li>
                <div className="grid-item">
                  <img src="/images/serenti30.jpg" width="80" height="80" loading="lazy" alt="Gallery"
                    className="w-100"/>
                </div>
              </li>

              <li>
                <div className="grid-item">
                  <img src="/images/serenti33.jpg" width="80" height="80" loading="lazy" alt="Gallery"
                    className="w-100"/>
                </div>
              </li>

              <li>
                <div className="grid-item">
                  <img src="/images/serenti28.jpg" width="80" height="80" loading="lazy" alt="Gallery"
                    className="w-100"/>
                </div>
              </li>

              <li>
                <div className="grid-item">
                  <img src="/images/serenti27.jpg" width="80" height="80" loading="lazy" alt="Gallery"
                    className="w-100"/>
                </div>
              </li>

            </ul>
          </li>

        </ul>

      </div>

      <div className="footer-bottom">

        <p className="copyright">
          Copyright © 2022 realesate. All Rights Reserved.
        </p>

      </div>

    </div>
  </footer>
    </div>
  )
}

export default Footer