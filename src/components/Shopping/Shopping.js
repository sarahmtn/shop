import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Control";
import Modal from "../UI/Modal/Modal";
import Order from "../Order/Order";

const prices = {
  product1: 60,
  product2: 72,
  product3: 45,
  product4: 73,
  product5: 60,
  product6: 72,
  product7: 45,
  product8: 73,
  product9: 72,
  product10: 45,
};

class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
      product5: 0,
      product6: 0,
      product7: 0,
      product8: 0,
      product9: 0,
      product10: 0,
    },
    totalPrice: 0,
    purchase: false,
  };

  addProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;
    const priceAdd = prices[type];
    const prePrice = this.state.totalPrice;
    const newPrice = prePrice + priceAdd;
    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };

  removeProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount - 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;
    const priceMines = prices[type];
    const prePrice = this.state.totalPrice;
    const newPrice = prePrice - priceMines;
    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };
  purchaseHandler = () => {
    this.setState({ purchase: true });
  };

  modalCloseHandler = () => {
    this.setState({ purchase: false });
  };

  purchaseContinueHandler = () => {
    console.log("purchaseContinueHandler");
  };

  render() {
    return (
      <Wrapper>
        <Modal show={this.state.purchase} modalClose={this.modalCloseHandler}>
          <Order
            products={this.state.products}
            continue={this.purchaseContinueHandler}
            cancle={this.modalCloseHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Controls
          productAdd={this.addProductHandler}
          productRemove={this.removeProductHandler}
          price={this.state.totalPrice}
          order={this.purchaseHandler}
        />
      </Wrapper>
    );
  }
}
export default Shopping;
