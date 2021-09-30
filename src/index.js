import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Auth from "./components/auth";
import LandingPage from "./components/LandingPage";
import Products from "./components/products";

ReactDOM.render(
  <Router>
      <React.StrictMode>
        <Switch>
          <Route path="/" component={App}/>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/product" component={Products} />
        </Switch>
        {/* <App /> */}
      </React.StrictMode>
  </Router>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
