import React from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import Item from "./Item";

class Cart extends React.Component {
  renderItems() {
    if (this.props.items.length > 0) {
      return this.props.items.map(item => <Item key={item.id} {...item} />);
    }

    return (
      <div>
        You have nothing in your cart! You should{" "}
        <Link to="/">find something you like!</Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h2>Your Cart</h2>
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    products: { products },
    cart
  } = state;
  return {
    items: products.filter(product => cart.includes(product.id))
  };
};

export default connect(mapStateToProps)(Cart);
