import React, {useState, useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Redirect, Link} from "react-router-dom";

// styles
import "./App.css";
//components
import Auth from "./components/auth";
import NavBar from "./components/navigation";
import Products from "./components/products";

let _storage = window.localStorage;

function App(){

    return (
		<NavBar/>
    )
}

export default App;
