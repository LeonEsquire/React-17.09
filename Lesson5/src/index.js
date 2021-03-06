import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Main} />
    <Route path="users" component={Users}>
      <Route path=":userId" component={User} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </Route>
</Router>, document.querySelector("#root"));

// localhost:8080
{/* 
<Layout>
  <Main />
<Layout/> 
*/}