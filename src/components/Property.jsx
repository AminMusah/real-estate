import React from "react";
import CheckboxBlankLineIcon from "remixicon-react/CheckboxBlankLineIcon";
import MapPin2LineIcon from "remixicon-react/MapPin2LineIcon";
import Camera2LineIcon from "remixicon-react/Camera2LineIcon";
import FilmLineIcon from "remixicon-react/FilmLineIcon";
import HotelBedLineIcon from "remixicon-react/HotelBedLineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import ArrowLeftRightLineIcon from "remixicon-react/ArrowLeftRightLineIcon";
import ShoppingCart2LineIcon from "remixicon-react/ShoppingCart2LineIcon";
import { useContext,useState } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Property({ id, image, title, price }) {
  const { addToCart } = useContext(CartContext);
  const [color,setColor] = useState("add-to-cart-btn");
  const [add,setAdd] = useState("Add to Cart");

  const alert = ()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Added to Cart'
    })
  }

  const addItem = ()=>{
    addToCart(id, price, image,id) 
    setColor("added-to-cart")
    setAdd("Added to Cart")
    alert()
  }

  return (
    <div>
      <div>
        <li>
          <div className="property-card">
            <Link to={`property/${id}`}>
            <figure className="card-banner">
              <a href="#">
                <img
                  src={image}
                  alt="New Apartment Nice View"
                  className="w-100"
                />
              </a>

              <div className="card-badge green">For Rent</div>

              <div className="banner-actions">
                <button className="banner-actions-btn">
                  <MapPin2LineIcon size={15} />

                  <address>Weija, Accra</address>
                </button>

                <button className="banner-actions-btn">
                  <Camera2LineIcon size={15} />

                  <span>4</span>
                </button>

                <button className="banner-actions-btn">
                  <FilmLineIcon size={15} />

                  <span>2</span>
                </button>
              </div>
            </figure>

            </Link>
            
            <div className="card-content">
              <div className="card-price">
                <strong>{price}</strong>/Month
              </div>

              <h3 className="h3 card-title">
                <a href="#">{title}</a>
              </h3>

              <p className="card-text">
                Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                Renovated With New Wood
              </p>

              <ul className="card-list">
                <li className="card-item">
                  <strong>3</strong>

                  <HotelBedLineIcon size={11} />

                  <span>Bedrooms</span>
                </li>

                <li className="card-item">
                  <strong>2</strong>

                  <UserLineIcon size={11} />

                  <span>Bathrooms</span>
                </li>

                <li className="card-item">
                  <strong>3450</strong>

                  <CheckboxBlankLineIcon size={11} />

                  <span>Square Ft</span>
                </li>
              </ul>
              
              <button
                className={color}
                onClick={addItem}
              >
                <span>{add}</span>
                <ShoppingCart2LineIcon size={15} />
              </button>
            </div>

            <div className="card-footer">
              <div className="card-author">
                <figure className="author-avatar">
                  <img
                    src="/images/property-2.jpg"
                    alt="William Seklo"
                    class="w-100"
                  />
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
                  <ArrowLeftRightLineIcon size={15} />
                </button>

                <button className="card-footer-actions-btn">
                  <HeartLineIcon size={15} />
                </button>

                <button className="card-footer-actions-btn">
                  <AddCircleLineIcon size={15} />
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}
