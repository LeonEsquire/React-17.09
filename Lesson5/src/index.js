import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Router history={browserHistory}>
    </Router>,
    document.querySelector("#root"));

// localhost:8080
{/* 
<Layout>
  <Main />
<Layout/> 
*/}