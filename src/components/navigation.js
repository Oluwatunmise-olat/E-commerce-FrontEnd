import React from 'react';
import { FaBars, FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// styles
import "../styles/navigation.css";

export default function NavBar(){

    return (
        <nav className="navbar">
            {/* heading/logo */}
            <div className="nav-logo">
                <p>E Bargain</p>
            </div>
            <div className="right-nav-content">
                {/* serach bar and cart icon */}
                <div className="search-cart">
                    <input type="text" placeholder="search" autoFocus />
                    <i><FaCartPlus className="cart-icon"  /></i>
                </div>
                {/* login/logout button */}
                <div className="nav-login">
                    <button>
                        <Link to="/auth">Login</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}
