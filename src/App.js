import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import "./App.css";

// components
import LandingPage from "./components/LandingPage";
import Home from "./components/home";
import Navbar from "./components/navigation";
import Register from "./components/register";
import Cart from "./components/cart";
import Products from "./components/products";
import ProductDetail from "./components/productDetail";
import Auth from "./components/auth";


function App() {

    // auth state 
    //true -> logged in; false -> logged out
    const [authStatus, setAuthStatus] = useState(false);

  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/products">
                <Products />
            </Route>
            <Route path="/product/detail/">
                <ProductDetail/>
            </Route>
            <Route to="/login">
                <Auth />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
