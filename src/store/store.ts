// store/store.ts

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers'; // Make sure to adjust the path based on your project structure

const middlewares = [thunkMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
