import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { User_reducer } from './Reducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = createStore(User_reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));


