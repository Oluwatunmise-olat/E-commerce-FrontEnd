import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Redirect } from "react-router-dom";
import { registerUrl } from "./urls";

// components
import useFetch from "../custom hook/useFetch";

// styles
import "../styles/register.css";

// register endpoint
export default function Register (){

    const [error, setError] = useState({type: "", message: ""});
    const [registerDetails, setRegisterDetails] = useState({username: "", password: "", password2: ""});
    const [validDetails, setValidDetails] = useState({username: "", password: ""});
    const [response, setResponse] = useState();

    function _register(url, payload){
        fetch(registerUrl, {
            method: 'POST',
            body:JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }  
        })
        .then(resp=>resp.json())
        .then(resp=>{
            setResponse(resp)
        })
        .catch(err=>setError({type: "registration error", message: err}));
    }
    

    const handleChange = (e) =>{
        let fieldName = e.target.name;
        let value = e.target.value;

        setRegisterDetails({...registerDetails, [fieldName]: `${value}`});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerDetails.username && registerDetails.password && registerDetails.password2){
            // check if password and passowrd2 are same
            if (registerDetails.password !== registerDetails.password2){
                setError({type: "password error", message: "password mismatch"})
            }else{
                setValidDetails({username: registerDetails.username, password: registerDetails.password});
            }
        }else{
            setError({type: "Empty fields", message: "Please fill all fields"});
        }
        // make a call to register endpoint
        // console.log(validDetails);
        {validDetails && _register(registerUrl, validDetails)};
    }

    return (
						<React.Fragment>
							{error.message !== "" &&
								<div className="error">
									<p>{error.message}</p>
								</div>
							 }
                <form className="register-form" onSubmit={handleSubmit}>
									<div className="form-container">
                    <label htmlFor="username">Username <i><FaUser /></i>: </label>
                    <input type="text" onChange={handleChange} name="username" id="username" />

                    <label htmlFor="password">Password : </label>
                    <input type="password" onChange={handleChange} name="password" id="password" />

                    <label htmlFor="password2">ReEnter Password : </label>
                    <input type="password" onChange={handleChange} name="password2" id="password2" />

                    <button className="register-btn">Register</button>
										</div>
                </form>
            {response && response.status &&<Redirect to="/login"/>}
					</React.Fragment>
    )
}
