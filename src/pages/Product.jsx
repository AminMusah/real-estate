import React from "react";
import CheckboxBlankLineIcon from "remixicon-react/CheckboxBlankLineIcon";
import LandscapeLineIcon from "remixicon-react/LandscapeLineIcon";
import RoadsterLineIcon from "remixicon-react/RoadsterLineIcon";
import PictureInPictureExitLineIcon from "remixicon-react/PictureInPictureExitLineIcon";
import ProfileLineIcon from "remixicon-react/ProfileLineIcon";
import HotelBedLineIcon from "remixicon-react/HotelBedLineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import AddCircleLineIcon from "remixicon-react/AddCircleLineIcon";
import ArrowLeftRightLineIcon from "remixicon-react/ArrowLeftRightLineIcon";
import ShoppingCart2LineIcon from "remixicon-react/ShoppingCart2LineIcon";
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import products from "../../data";
import Swal from "sweetalert2";

export default function Product({ image, title, price }) {
  const { addToCart } = useContext(CartContext);
  const [color, setColor] = useState("add-to-cart");
  const [add, setAdd] = useState("Add to Cart");

  const alert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Added to Cart",
    });
  };

  const addItem = () => {
    addToCart(itemName, itemPrice, itemImage, id);
    setColor("added-to-cart");
    setAdd("Added to Cart");
    alert();
  };

  const { id } = useParams();

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
                  <button className={color} onClick={addItem}>
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
          <div className="details-card">
            <div className="details-card-content">
              <p className="author-title">
                Welcome to this stunningly renovated weija Ranch, situated at
                the end of the Kosoa Southland Drive. You'll be greeted by
                majestic Elder Oaks that line the driveway, providing an
                enchanting canopy as you drive up. This beautiful home offers a
                brand new kitchen, bathroom, luxury flooring, windows, and more
                - all just waiting for your personal touch. With its good
                bedroom sizes, home office space, great room and finished
                basement, there's plenty of room for you to make this house your
                own. The lot size is just under a half acre, providing a private
                backyard for you to enjoy. Plus, its location is unbeatable!
                You'll be close to the West hills mall, Strong
                Hospital, Town Shopping and Restaurants. Don't miss out
                on this wonderful opportunity to settle into this quiet
                neighborhood ranch!
              </p>
            </div>

            <div className="card-footer">
              <ul className="details-lists">
                <li>
                  <HotelBedLineIcon size={15} />
                  <span>3 Bedrooms & 3.5 Bathrooms</span>
                </li>
                <li>
                  <LandscapeLineIcon size={15} />
                  <span>Gross external area: 112 m2 Gross</span>
                </li>
                <li>
                  <PictureInPictureExitLineIcon size={15} />
                  <span>internal area: 108 m2</span>
                </li>
                <li>
                  <CheckboxBlankLineIcon size={15} />
                  <span>Plot area: 390 m2</span>
                </li>
                <li>
                  <RoadsterLineIcon size={15} />
                  <span>2 car parks</span>
                </li>
              </ul>
            </div>
          </div>

          <ul className="gallery-list">
            <li>
              <p className="">Gallery</p>
            </li>

            <li>
              <ul className="gallery-grid-list">
                <li>
                  <div className="gallery-item">
                    <img
                      src="/images/serenti33.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="gallery-item">
                    <img
                      src="/images/serenti33.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="gallery-item">
                    <img
                      src="/images/serenti33.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="gallery-item">
                    <img
                      src="/images/serenti33.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="gallery-item">
                    <img
                      src="/images/serenti33.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>

                <li>
                  <div className="gallery-item">
                    <img
                      src="/images/serenti33.jpg"
                      width="80"
                      height="80"
                      loading="lazy"
                      alt="Gallery"
                      className="w-100"
                    />
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
