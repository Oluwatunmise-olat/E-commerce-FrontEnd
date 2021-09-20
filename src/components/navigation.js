import React from 'react';
import { FaBars, FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// styles
import "../styles/navbar.css";

export default function NavBar(){
    return (
        <nav className="navbar">
            <div className="heading-fabars">
                <div className="fabars">
                    <i><FaBars/></i>
                </div>
                <p>Olat Soft</p>
            </div>
            <div className="search-cart-login">
                <div className="search">
                    <i><FaSearch /></i>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <i><FaCartPlus/></i>
                    </Link>
                </div>
                <button className="login-logout-btn">
                    Login
                </button>
            </div>
        </nav>
    )
}
