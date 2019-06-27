import React from 'react';
import CartColumns from "./CartColumns";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
        <div className="col-10 mx-auto text-center text-title">
            <h1> your cart is currently empty</h1>
            <CartColumns />
        </div>
      
    </div>
  );
}
