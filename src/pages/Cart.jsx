import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const { items, clearCart, clearItem, total } = useContext(CartContext);
 
  
  const clearAlert = ()=>{
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
      title: 'Cart Empty'
    })
  }

  const removeItem = ()=>{
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
      title: 'Item removed'
    })
  }

  const emptyCart = ()=>{
    clearCart()
    clearAlert()
  }

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
                      onClick={() => removeItem(clearItem(item.id))}
                    >
                      <CloseLineIcon />
                    </div>
                  </div>
                );
              })}{" "}
              {items.length > 0 ? (
                <button
                  className="btn btn-primary has-before has-after clear-cart"
                  onClick={emptyCart}
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
