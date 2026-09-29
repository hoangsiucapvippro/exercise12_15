import React from "react";
import dishes from "../data/dishes";
import { useCart } from "./CartContext";

function DishesList() {
  const { addToCart, cartCount, cartTotal } = useCart();

  return (
    <div>
      <h2>Exercise 2: Dishes List</h2>

      <h3>
        Cart: {cartCount} items - ${cartTotal.toFixed(2)}
      </h3>

      <div>
        {dishes.map((dish) => (
          <div
            key={dish.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              width: "400px",
            }}
          >
            <h3>{dish.name}</h3>

            <p>Category: {dish.category}</p>

            <p>Price: ${dish.price}</p>

            <p>{dish.description}</p>

            <button onClick={() => addToCart(dish)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishesList;