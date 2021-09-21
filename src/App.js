import React from "react";
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


function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <Home/>
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
        </Switch>
    </Router>
  );
}

export default App;
