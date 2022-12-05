import React from 'react'
import CheckboxBlankLineIcon from 'remixicon-react/CheckboxBlankLineIcon'
import MapPin2LineIcon from 'remixicon-react/MapPin2LineIcon'
import Camera2LineIcon from 'remixicon-react/Camera2LineIcon'
import FilmLineIcon from 'remixicon-react/FilmLineIcon'
import HotelBedLineIcon from 'remixicon-react/HotelBedLineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HeartLineIcon from 'remixicon-react/HeartLineIcon'
import AddCircleLineIcon from 'remixicon-react/AddCircleLineIcon'
import ArrowLeftRightLineIcon from 'remixicon-react/ArrowLeftRightLineIcon'
import { Link } from 'react-router-dom'

export default function Property({image,title,price}) {
  return (
    <div>
        <Link to="/checkout">

            <li>
              <div class="property-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={image} alt="New Apartment Nice View" class="w-100"/>
                  </a>

                  <div class="card-badge green">For Rent</div>

                  <div class="banner-actions">

                    <button class="banner-actions-btn">
                      <MapPin2LineIcon size={15}/>

                      <address>Weija, Accra</address>
                    </button>

                    <button class="banner-actions-btn">
                      <Camera2LineIcon size={15}/>

                      <span>4</span>
                    </button>

                    <button class="banner-actions-btn">
                      <FilmLineIcon size={15}/>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div class="card-content">

                  <div class="card-price">
                    <strong>{price}</strong>/Month
                  </div>

                  <h3 class="h3 card-title">
                    <a href="#">{title}</a>
                  </h3>

                  <p class="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul class="card-list">

                    <li class="card-item">
                      <strong>3</strong>

                      <HotelBedLineIcon size={15}/>

                      <span>Bedrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>2</strong>

                      <UserLineIcon size={15}/>

                      <span>Bathrooms</span>
                    </li>

                    <li class="card-item">
                      <strong>3450</strong>

                      <CheckboxBlankLineIcon size={15}/>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                <div class="card-footer">

                  <div class="card-author">

                    <figure class="author-avatar">
                      <img src="/images/property-2.jpg" alt="William Seklo" class="w-100"/>
                    </figure>

                    <div>
                      <p class="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p class="author-title">Estate Agents</p>
                    </div>

                  </div>

                  <div class="card-footer-actions">

                    <button class="card-footer-actions-btn">
                      <ArrowLeftRightLineIcon size={15}/>
                    </button>

                    <button class="card-footer-actions-btn">
                      <HeartLineIcon size={15}/>
                    </button>

                    <button class="card-footer-actions-btn">
                      <AddCircleLineIcon size={15}/>
                    </button>

                  </div>

                </div>

              </div>
            </li>
            </Link>

        </div>
  )
}
