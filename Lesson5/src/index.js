import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './layouts/Layout';
import Main from './pages/Main';
import User from './pages/User';
import Post from './pages/Post';
import Comments from "./pages/Comments";
import Comment from "./pages/Comment";

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={LayoutHomePage}>
    <IndexRoute component={Main} />
  </Route>
</Router>,
    <Provider store={store}>
      <Layout />
    </Provider>, document.querySelector("#root"));

// localhost:8080
{/* 
<Layout>
  <Main />
<Layout/> 
*/}