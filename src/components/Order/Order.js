import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Button from "../UI/Button/Button";
import "./Order.css";

const Order = (props) => {
  const summery = Object.keys(props.products).map((item) => {
    return (
      <li key={item}>
        {item} : {props.products[item]}
      </li>
    );
  });
  return (
    <Wrapper>
      <h3>سبد خرید شما:</h3>
      <ul className="list">{summery}</ul>
      <p>جمع کل خرید شما:{props.price}</p>
      <p>میخواهید ادامه دهید؟</p>
      <Button btnType="danger" click={props.cancle}>
        نه
      </Button>
      <Button btnType="success" click={props.continue}>
        آره
      </Button>
    </Wrapper>
  );
};
export default Order;
