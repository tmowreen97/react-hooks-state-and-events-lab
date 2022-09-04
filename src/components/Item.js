import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart]= useState(true)
  //if addToCart is true, it is not in the cart, class name is "", button reads "Add to Cart"
  //if addToCart is false, it is in the cart, class name is "in-cart", button reads "Remove from Cart"

  function handleClick(){
    setAddToCart(!addToCart)

  }

  return (
    <li className={addToCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{addToCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
