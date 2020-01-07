export default (state = { loading: false, products: [] }, action) => {
  let newState = {};

  switch (action.type) {
    case "FETCH_PRODUCTS_STARTED":
      newState = {
        ...state,
        loading: true
      };
      break;
    case "PRODUCTS_FETCHED":
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
