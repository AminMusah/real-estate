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
import ShoppingCart2LineIcon from 'remixicon-react/ShoppingCart2LineIcon'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom'

export default function Property({id,image,title,price}) {
  const {addToCart} = useContext(CartContext)

  return (
    <div>
        <div>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <img src={image} alt="New Apartment Nice View" className="w-100"/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <MapPin2LineIcon size={15}/>

                      <address>Weija, Accra</address>
                    </button>

                    <button className="banner-actions-btn">
                      <Camera2LineIcon size={15}/>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <FilmLineIcon size={15}/>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>{price}</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">{title}</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>


                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <HotelBedLineIcon size={11}/>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <UserLineIcon size={11}/>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <CheckboxBlankLineIcon size={11}/>

                      <span>Square Ft</span>
                    </li>

                  </ul>
                  <button className='add-to-cart' onClick={()=> addToCart(title,price,image,id)}><span>Add to cart</span><ShoppingCart2LineIcon size={15}/></button>

                </div>
                
                <div className="card-footer">

                  <div className="card-author">

                    <figure className="author-avatar">
                      <img src="/images/property-2.jpg" alt="William Seklo" class="w-100"/>
                    </figure>

                    <div>
                      <p className="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div>

                  </div>

                  <div className="card-footer-actions">

                    <button className="card-footer-actions-btn">
                      <ArrowLeftRightLineIcon size={15}/>
                    </button>

                    <button className="card-footer-actions-btn">
                      <HeartLineIcon size={15}/>
                    </button>

                    <button className="card-footer-actions-btn">
                      <AddCircleLineIcon size={15}/>
                    </button>

                  </div>

                </div>

              </div>
            </li>
            </div>

        </div>
  )
}
