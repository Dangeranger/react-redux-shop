import axios from "axios";

export const addToCart = id => ({
  type: "ADD_TO_CART",
  id
});

export const removeFromCart = id => ({
  type: "REMOVE_FROM_CART",
  id
});

export const fetchProductsStarted = () => ({
  type: "FETCH_PRODUCTS_STARTED"
});

export const productsFetched = products => ({
  type: "PRODUCTS_FETCHED",
  products
});

export const productFetchFailed = error => ({
  type: "PRODUCT_FETCH_FAILED",
  error
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsStarted());
    axios
      .get("http://localhost:3001/products")
      .then(response => {
        dispatch(productsFetched(response.data));
      })
      .catch(err => {
        dispatch(productFetchFailed(err));
      });
  };
};
