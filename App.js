import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// navigation
import ShopNavigator from './navigation/ShopNavigator';

// reducer
import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}