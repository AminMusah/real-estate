import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (name, price, image, id) => {
    setItems((prevState) => [...prevState, { name, price, image, id }]);
  };

  const clearCart = () => {
    setItems((prevState) => []);
  };

  const clearItem = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  const total = (something) => {
    // calculate items in cart
    let subtotal = 0;
    let sum = 0;
    something.map((item) => {
      sum += item.price;
    });
    subtotal = sum;
    console.log(subtotal)
    return subtotal;
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, clearCart, clearItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
