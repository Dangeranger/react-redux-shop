import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products";

const initialState = { cart: [], products: { loading: true, products: [] } };

export default createStore(
  combineReducers({
    defaultState: initialState,
    cart: cartReducer,
    products: productsReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
