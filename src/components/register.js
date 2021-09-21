import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

// styles
import "../styles/register.css";

// register endpoint
const url = "http://localhost:8000/gateway/register";

export default function Register (){

    const [error, setError] = useState({type: "", message: ""});
    const [registerDetails, setRegisterDetails] = useState({username: "", password: "", password2: ""});
    const [validDetails, setValidDetails] = useState({username: "", password: ""});

    const handleChange = (e) =>{
        let fieldName = e.target.name;
        let value = e.target.value;

        setRegisterDetails({...registerDetails, [fieldName]: `${value}`});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerDetails.username && registerDetails.password && registerDetails.password2){
            // check if password and passowrd2 are same
            if (password !== password2){
                setError({type: "password error", message: "password mismatch"})
            }else{
                setValidDetails({username: registerDetails.username, password: registerDetails.password});
            }
        }else{
            setError({type: "Empty fields", message: "Please fill all fields"});
        }
        // make a call to register endpoint
    }

    return (
        <div className="register-flex">
            <div className="register">
                <p>Register Here</p>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username <i><FaUser /></i>: </label>
                    <input type="text" onChange={handleChange} name="username" id="username" />

                    <label htmlFor="password">Password : </label>
                    <input type="password" onChange={handleChange} name="password" id="password" />

                    <label htmlFor="password2">ReEnter Password : </label>
                    <input type="password" onChange={handleChange} name="password2" id="password2" />

                    <button className="register-btn">Register</button>
                </form>
            </div>
        </div>
    )
}
