// frontend/src/store/index.js
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import listingsReducer from "./listings";
import reviewReducer from "./reviews";
import reservationReducer from "./reservations";
import usersReducer from "./user";
import PhotosReducer from "./photo";
import messagesReducer from "./message";

const rootReducer = combineReducers({
  listings: listingsReducer,
  session: sessionReducer,
  reviews: reviewReducer,
  reservation: reservationReducer,
  user:usersReducer,
  photos:PhotosReducer,
  messages:messagesReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
