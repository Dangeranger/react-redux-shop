import React from "react";
import { Router, Link } from "@reach/router";

import { Provider } from "react-redux";
import store from "./store";
import { fetchProducts } from "./actions/products";

import "./App.scss";

import Products from "./Products";
import Product from "./Products/Show";
import Cart from "./Cart";
import ProductForm from "./Admin/Products/Form";

import CartMenuIcon from "./Cart/MenuIcon";

store.dispatch(fetchProducts());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <menu className="topbar">
          <Link to="/">
            <h1>My Shop</h1>
          </Link>
          <CartMenuIcon></CartMenuIcon>
        </menu>
        <Router>
          <Products path="/" />
          <Product path="/products/:id" />

          <Cart path="/cart" />

          <ProductForm path="/admin/products/new" />
        </Router>
      </Provider>
    );
  }
}

export default App;
