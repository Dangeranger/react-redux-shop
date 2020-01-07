import * as actions from "../actions/cart";

export default (state = [], action) => {
  let newState = {};

  switch (action.type) {
    case actions.ADD_TO_CART:
      newState = state.concat(action.id);
      break;
    case actions.REMOVE_FROM_CART:
      const newCart = state.filter(id => id !== action.id);

      newState = newCart;
      break;
    default:
      newState = state;
  }

  return newState;
};
