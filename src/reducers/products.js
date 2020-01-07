import * as actions from "../actions/products";

export default (state = { loading: false, products: [] }, action) => {
  let newState = {};

  console.log(action);

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
    case actions.PRODUCT_CREATED:
      console.log("UPDATING PRODUCT LIST");
      newState = {
        ...state,
        products: state.products.concat(action.data)
      };
      break;

    default:
      newState = state;
  }

  return newState;
};
