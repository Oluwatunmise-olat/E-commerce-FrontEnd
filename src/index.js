import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Products from "./components/products";
import LoginOrRegister from "./components/login_register";
import productDetail from "./components/productDetail";
import Cart from "./components/cart";
import SearchPage from "./components/searchPage";

ReactDOM.render(
  <Router>
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route exact path="/product" component={Products} />
          <Route exact path="/auth">
            <LoginOrRegister />
          </Route>
          <Route path="/cart" exact component={Cart} />
          <Route path="/search/:q" exact component={SearchPage} />
          <Route exact path="/product-detail/:slug" component={productDetail} />
        </Switch>
      </React.StrictMode>
  </Router>
,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
