import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Main} />
</Router>, document.querySelector("#root"));

// localhost:8080
{/* 
<Layout>
  <Main />
<Layout/> 
*/}