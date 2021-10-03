import React from 'react';
import { FaBars, FaSearch, FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

// styles
import "../styles/navigation.css";

export default function NavBar(){

    const [search, setSearch] = React.useState();

    const loadData = (e) => {
        e.preventDefault();
        if (search.length >=2){
           window.location.href = `/search/${search}/`
        }
    }

    return (
        <nav className="navbar">
            {/* heading/logo */}
            <div className="nav-logo">
                <p>E Bargain</p>
            </div>
            <div className="right-nav-content">
                {/* serach bar and cart icon */}
                <div className="search-cart">
                    <form onSubmit={loadData}>
                        <input type="text" onChange={(e)=>{
                            setSearch(e.target.value);
                        }} placeholder="search" autoFocus />
                    </form>
                    <i style={{margin: "5px", marginLeft: "10px"}}><FaCartPlus size="2x" style={{width: "32px", position: "relative", top: "-10px"}}/></i>
                </div>
                {/* login/logout button */}
                <div className="nav-login">
                    <button style={{padding: "2px"}}>
                        <Link to="/auth">Login</Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}
