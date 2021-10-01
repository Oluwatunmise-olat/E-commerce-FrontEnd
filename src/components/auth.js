import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import {LoginContext} from "../App";
import "../styles/auth.css";
import { loginUrl } from "./urls";

export default function _Auth(){

    let _storage = window.localStorage;
    
    const _login = (url, payload) =>{
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),

            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp=>{
            if (!resp.ok && resp.status === 400){
                return resp.json()
            }else if (!resp.ok){
                throw new Error("Response was not Ok");
            }else{
                return resp.json();
            }
        })
        .then(resp=>{
            if (!resp.error){
            setToken(resp);
            }else{
                setError({type: "Credential Error", message: resp.error})
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const [loginCredentials, setLoginCredentials] = useState({username: "", password: ""});
    const [error, setError] = useState({type: "", message: ""});
    const [token, setToken] = useState();

    const handleChange = (e) =>{
        const fieldName = e.target.name;
        const value = e.target.value;

        // set credential details
        setLoginCredentials({...loginCredentials, [fieldName]: `${value}`});
    };

    // set token in local storage

    {token && _storage.setItem("token", JSON.stringify({access_token: token.access_token, refresh_token: token.refresh_token}))}

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!(loginCredentials.username && loginCredentials.password)){
            setError({type: "Field Error", message: "Fill in all fields"});
        }else{
            setError({type: "", message: ""});
            console.log(loginCredentials);
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
									<div className={error.type ? "error" : ""}>
											{error && <h2>{error.message}</h2>}
									</div>
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