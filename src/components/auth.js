import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import {LoginContext} from "../App";
import "../styles/auth.css";
import { loginUrl } from "./urls";
import { setToken as setAuthToken } from "./localStorage";

export default function _Auth(){

    function _login(url, params){
        axios({
            url: url,
            method: "post",
            data: {
                ...params
            },
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(resp=>{
            console.log(resp.data.token);
            setAuthToken(resp.data.token);
            setToken(true);
        })
        .catch(err=>{
            console.log(err.response);
            if (err.response.status == 400) return setError({type: "Credeential Error", message: err.response.data.non_field_errors[0]})
        })
    }
    

    const [loginCredentials, setLoginCredentials] = useState({username: "", password: ""});
    const [error, setError] = useState({type: "", message: ""});
    const [token, setToken] = useState(false);

    const handleChange = (e) =>{
        const fieldName = e.target.name;
        const value = e.target.value;

        // set credential details
        setLoginCredentials({...loginCredentials, [fieldName]: `${value}`});
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!(loginCredentials.username && loginCredentials.password)){
            setError({type: "Field Error", message: "Fill in all fields"});
        }else{
            setError({type: "", message: ""});
            _login(loginUrl, {
                username: loginCredentials.username,
                password: loginCredentials.password
            })
        }
    }

    return (
        <React.Fragment> 
            <>
                <div className="overlay"></div>
                <div className="login">
                {error.message !== "" &&
									<div className="error">
										<p>{error.message}</p>
									</div>
							 }

							<form onSubmit={handleSubmit} className="form-container">
											<label htmlFor="username">Username</label>
											<input onChange={handleChange} type="text" id="username" name="username" />
											<label htmlFor="password">Password</label>
											<input onChange={handleChange} type="password" id="password" name="password" />
											<button className="login-btn">login</button>
							</form>
                </div>
            </>
            {/* redirect to home page on successful login */}
            {token && <Redirect to="/" />}
        </React.Fragment>
    )
}