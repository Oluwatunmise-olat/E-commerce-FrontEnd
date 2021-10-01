import React, { useState } from "react";

import "../styles/login_register.css";

import Register from "./register";
import Login from "./auth";

export default function LoginRegister(){

    // By default it shows the register page that why we
    // have a single state
    const [loginState, setLoginState] = useState(false);

    // checks the name of the button and displays the 
    // corresponding information accordingly
    function currentInfo(e){
        e.preventDefault();
        if (e.target.name == "login") return setLoginState(true);
        else return setLoginState(false);
    }

    return (
        <div className="login_card">
            {/* navigation */}
            <div className="card-nav">
                <button onClick={currentInfo} name="login">Login</button>
                <button onClick={currentInfo} name="register">Register</button>
            </div>
            <div className="container">
                {loginState ? <Login /> : <Register/>}
            </div>
        </div>
    )
}