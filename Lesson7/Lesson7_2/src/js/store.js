import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';

import reducers from './reducers';

const middlewares = applyMiddleware(thunk);

export default createStore(reducers, middlewares);
/*
{
  tweets: {
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  } ,
  user: {
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }
}
*/