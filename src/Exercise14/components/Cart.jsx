import React from "react";
import { useCart } from "./CartContext";


function Cart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <h2>Cart</h2>

      <p>Total Items: {cartCount}</p>

      <p>Total Value: ${cartTotal.toFixed(2)}</p>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                padding: "10px",
              }}
            >
              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={clearCart}
        style={{
          marginTop: "20px",
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;