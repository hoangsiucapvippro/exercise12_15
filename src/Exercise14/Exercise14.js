import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./components/CartContext";
import Theme from "./context/Theme";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";


function Exercise14() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div
          style={{
            padding: "20px",
          }}
        >
          <h1>Exercise 14 - useContext</h1>

          <Theme />

          <DishesList />

          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default Exercise14;