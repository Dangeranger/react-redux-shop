# React / Redux Shop

This is a small application that uses:

* React
* Redux
* react-redux
* Reach Router

To build a little shop. It doesn't do much, but it is a better demo than a simple counter.

## Running

To run this app:

```
yarn install
yarn start
```


## Without Redux (without hooks)

If you want to compare what this application would look like _without_ redux and without React hooks, check out the `without-redux` branch.

Of particular note is the "messy" props passing in `App.js`, where each of the components must receive their own props rather than having them mapped from the store. The worst "offender" here is the `removeFromCart` which must be passed from `App`, to `Cart`, then to `Item`.

Another thing to notice is that all the "store" logic is in now in `App.js` and it feels like this would get rather crowded if this application was evolved further.

## Without Redux (with hooks)

If you want to compare what this application would look like _without_ redux and _with_ React hooks, check out the `without-redux-with-hooks` branch.

Hooks are a relatively new React feature. On this branch, there's code that shows an almost Redux approach to handling the cart. Thanks to @Jayphen for the PR for this branch.

## Separate Reducers / Async Actions

If you want a slightly more complicated version with _multiple_ reducers and asynchronous axios requests, check out the `async-thunk` branch. This branch uses the `thunk` library.

When using this branch, you'll need to start up the `json-server` too:

```
yarn json-server db.json -p 3001 -w
```

This branch uses two separate reducers: one for the list of products, and one for the cart. The logic is split up between `src/reducers/cart.js` and `src/reducers/products.js`, and combined in `src/store.js`. It's important here to note that both reducers deal with either the cart or products separately.
