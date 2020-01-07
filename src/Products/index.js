import React from "react";
import { connect } from "react-redux";

import Product from "./Product";
import { fetchProducts } from "../actions";

import styles from "./index.module.scss";

class Products extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map(product => (
      <Product key={product.id} {...product} />
    ));
  }

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return <div className={styles.products}>{this.renderProducts()}</div>;
  }
}

const mapStateToProps = state => {
  const {
    products: { products, loading }
  } = state;
  return {
    loading: loading,
    products: products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
