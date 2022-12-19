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
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import products from "../../data";
import Swal from "sweetalert2";


export default function Product({ image, title, price }) {
  const { addToCart } = useContext(CartContext);

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
    addToCart(itemName, itemPrice, itemImage,id) 
    alert()
  }

  const { id } = useParams()

  let itemName = "";
  let itemCategory = "";
  let itemPrice = "";
  let itemImage = "";

  products.find((item) => {
    let product = id == item.id;
    if (product) {
      itemName = item.title;
      itemCategory = item.category;
      itemPrice = item.price;
      itemImage = item.image;
      return;
    }
  });

  return (
    <div>
      <Header />
      <section className="property" id="property">
        <div className="container">
          <div className="about-content"></div>
          <div>
            <li className="product-wrapper">
            <div>
            <figure className="card-banner">
                  <a href="#">
                    <img
                      src={itemImage}
                      alt="New Apartment Nice View"
                      className="w-100"
                    />
                  </a>

                  {/* <div className="card-badge green">For Rent</div>

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
                  </div> */}
                </figure>
            </div>
              <div className="property-card">
               

                <div className="card-content">
                  <div className="card-price">
                    <strong>{itemPrice}</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">{itemName}</a>
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
                    className="add-to-cart"
                    onClick={ addItem}
                  >
                    <span>Add to cart</span>
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
      </section>
      <Footer />
    </div>
  );
}
