import React, {useState, useContext} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Redirect, Link} from "react-router-dom";

// styles
import "./App.css";
//components
import Auth from "./components/auth";
import NavBar from "./components/navigation";
import Products from "./components/products";

export const LoginContext = React.createContext(null);

let _storage = window.localStorage;

function App(){

		const tokenAvailable = JSON.parse(window.localStorage.getItem("token"))["access_token"] !== undefined;

		console.log(tokenAvailable)

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
		const [isLoggedIn, setIsLoggedIn] = useState(tokenAvailable ? true: false);


    return (
		<NavBar/>
    )
}

export default App;
