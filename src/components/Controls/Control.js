import React from "react";
import "./Control.css";
import Builder from "./Builder/Builder";

const products = [
  {
    title: "محصول 1",
    type: "product1",
  },
  {
    title: "محصول 2",
    type: "product2",
  },
  {
    title: "محصول 3",
    type: "product3",
  },
  {
    title: "محصول 4",
    type: "product4",
  },
  {
    title: "محصول 5",
    type: "product5",
  },
  {
    title: "محصول 6",
    type: "product6",
  },
  {
    title: "محصول 7",
    type: "product7",
  },
  {
    title: "محصول 8",
    type: "product8",
  },
  {
    title: "محصول 9",
    type: "product9",
  },
  {
    title: "محصول 10",
    type: "product10",
  },
];

const Controls = (props) => {
  return (
    <div className="controls">
      {products.map((item) => {
        return (
          <Builder
            key={item.title}
            title={item.title}
            add={() => props.productAdd(item.type)}
            remove={() => props.productRemove(item.type)}
          />
        );
      })}

      <button className="order-btn" onClick={props.order}>
        <img
          className="shoppingicon"
          width="20"
          height="20"
          src="https://img.icons8.com/glyph-neue/64/FFFFFF/shopping-cart.png"
          alt="shopping-bag--v1"
        />
        مشاهده‌ی سبد خرید من
      </button>
    </div>
  );
};

export default Controls;
