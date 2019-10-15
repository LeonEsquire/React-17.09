import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import { store } from './store';
import { routes } from './routes';
import { App } from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout'
import Layout from './layouts/Layout';
import Main from './pages/Main';

ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Main} />
  </Route>
</Router>,
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById("#root"));

