import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

// styles
import "../styles/register.css";

// svg
import RegisterSvg from "../styles/svg/Register-pana.svg"

export default function Register (){
    return (
        <div className="register-flex">
            <div style={{width: "50%"}}>
                <img style={{width: "100%"}} src={`${RegisterSvg}`} alt="register svg" />
            </div>
            <div className="register">
                <p>Register Here</p>
                <form className="register-form">
                    <label htmlFor="username">Username <i><FaUser /></i>: </label>
                    <input type="text" name="username" id="username" />

                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" id="password" />

                    <label htmlFor="password2">ReEnter Password : </label>
                    <input type="password" name="password2" id="password2" />

                    <button className="register-btn">Register</button>
                </form>
            </div>
        </div>
    )
}
