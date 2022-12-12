import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, clearCart, clearItem, total } = useContext(CartContext);
  console.log(items)

  // calculate items in cart
  // let subtotal = 0;
  // let sum = 0;
  // items.map((item) => {
  //   sum += item.price;
  // });
  // subtotal = sum;
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container cart-container">
          <h2 className="h2 section-title cart-title">Cart</h2>
          <div className="item-container">
            <div className="items">
              {items.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <figure className="cart-banner">
                      <img
                        src={item.image}
                        alt="Recent Commercial Real Estate Transactions"
                        className="w-100"
                      />
                    </figure>
                    <div className="cart-items">
                      <ul className="cart-item-info">
                        <h2>Details</h2>
                        <li>{item.name}</li>
                        <li>Item Id: {item.id}</li>
                      </ul>
                      <div className="cart-price">
                        <h2>Price </h2>₵{item.price}
                      </div>
                    </div>

                    <div
                      className="remove-btn"
                      onClick={() => clearItem(item.id)}
                    >
                      <CloseLineIcon />
                    </div>
                  </div>
                );
              })}{" "}
              {items.length > 0 ? (
                <button
                  className="btn btn-primary has-before has-after clear-cart"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </button>
              ) : (
                <div className="empty-cart-container">
                  <p className="cart-text">
                    <span className="has-before">Empty Cart</span>
                  </p>
                  <Link
                    to="/properties"
                    className="btn btn-primary has-before has-after"
                  >
                    <ArrowDropLeftLineIcon /> Go Shopping
                  </Link>
                </div>
              )}
            </div>
            <div className="sub-total">
              {items.length > 0 ? (
                <div className="subtotal-container">
                  <div className="subtotal">
                    <p>Subtotal</p>
                    {/* <span>₵{subtotal}</span> */}
                    <span>₵{total(items)}</span>
                  </div>
                  <p>Taxes and delivery calculated at checkout</p>
                  <Link
                    to="/checkout"
                    className="btn btn-secondary has-before has-after"
                  >
                    Check out
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
