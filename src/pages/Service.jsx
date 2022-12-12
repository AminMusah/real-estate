import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Building2FillIcon from 'remixicon-react/Building2FillIcon'
import BuildingLineIcon from 'remixicon-react/BuildingLineIcon'
import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import { Link } from 'react-router-dom'

function Service() {
  return (
    <div>
        <Header/>
        <section className="section service">
        <div className="container">

          <ul className="grid-list">

            <li>
              <Link to="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/property-1.jpg" width="450" height="350" loading="lazy" alt="Buy a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <BuildingLineIcon/>

                  <h3 className="h3 card-title">Buy A home</h3>
                </div>

              </Link>
            </li>

            <li>
              <Link to="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/property-2.jpg" width="450" height="350" loading="lazy" alt="rent a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <Building2FillIcon/>

                  <h3 className="h3 card-title">Rent a home</h3>
                </div>

              </Link>
            </li>

            <li>
              <Link to="#" className="service-card" >

                <figure className="card-banner">
                  <img src="/images/property-3.jpg" width="450" height="350" loading="lazy" alt="Sell a home"
                    className="img-cover"/>
                </figure>

                <div className="card-content has-before">
                  <Home5LineIcon/>

                  <h3 className="h3 card-title">Sell a home</h3>
                </div>

              </Link>
            </li>

          </ul>

        </div>
      </section>
        <Footer/>
    </div>
  )
}

export default Service