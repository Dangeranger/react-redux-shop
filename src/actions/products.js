import axios from "axios";

export const FETCH_PRODUCTS_STARTED = "FETCH_PRODUCTS_STARTED";
export const PRODUCTS_FETCHED = "PRODUCTS_FETCHED";
export const PRODUCT_FETCH_FAILED = "PRODUCT_FETCH_FAILED";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const PRODUCT_CREATED = "PRODUCT_CREATED";

export const fetchProductsStarted = () => ({
  type: FETCH_PRODUCTS_STARTED
});

export const productsFetched = products => ({
  type: PRODUCTS_FETCHED,
  products
});

export const productFetchFailed = error => ({
  type: PRODUCT_FETCH_FAILED,
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

export const productCreated = data => ({
  type: PRODUCT_CREATED,
  data: data
});

export const createProduct = values => {
  return dispatch => {
    // dispatch(createProductStarted());
    axios
      .post("http://localhost:3001/products", values)
      .then(response => {
        dispatch(productCreated(response.data));
      })
      .catch(err => {
        // dispatch(productFetchFailed(err));
      });
  };
};
