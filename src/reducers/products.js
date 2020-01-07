import * as actions from "../actions/products";

export default (state = { loading: false, products: [] }, action) => {
  let newState = {};

  switch (action.type) {
    case actions.FETCH_PRODUCTS_STARTED:
      newState = {
        ...state,
        loading: true
      };
      break;
    case actions.PRODUCTS_FETCHED:
      newState = {
        ...state,
        loading: false,
        products: action.products
      };
      break;
    default:
      newState = state;
  }

  return newState;
};
