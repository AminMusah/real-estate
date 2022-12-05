import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import Header from ''

function Service() {
  return (
    <div>
        <Header/>
        <section className="section service">
        <div className="container">

          <ul className="grid-list">

            <li>
              <a href="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/property-1.jpg" width="450" height="350" loading="lazy" alt="Buy a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <ion-icon name="restaurant-outline" ></ion-icon>

                  <h3 className="h3 card-title">Buy A home</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/property-2.jpg" width="450" height="350" loading="lazy" alt="rent a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <ion-icon name="cafe-outline" ></ion-icon>

                  <h3 className="h3 card-title">Rent a home</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/property-3.jpg" width="450" height="350" loading="lazy" alt="Sell a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <ion-icon name="wine-outline"></ion-icon>

                  <h3 className="h3 card-title">Sell a home</h3>
                </div>

              </a>
            </li>

          </ul>

        </div>
      </section>
        <Footer/>
    </div>
  )
}

export default Service