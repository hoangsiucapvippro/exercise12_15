import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    setCartItems([...cartItems, dish]);
  };

  const removeFromCart = (id) => {
    const newCart = cartItems.filter((item) => item.id !== id);

    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };