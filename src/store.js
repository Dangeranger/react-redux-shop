import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products";
import { reducer as formReducer } from "redux-form";

const initialState = { cart: [], products: { loading: true, products: [] } };

export default createStore(
  combineReducers({
    defaultState: initialState,
    cart: cartReducer,
    products: productsReducer,
    form: formReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
