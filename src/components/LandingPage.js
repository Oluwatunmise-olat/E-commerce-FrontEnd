import React from 'react';
import {Link} from "react-router-dom";

//styles
import "../styles/landing_page.css";

export default function LandingPage (){
    return (
        <div className="landing_body">
            <h2 className="logo_title">E Bargain</h2>
            <section className="landing">
                <div className="landing_div">
                    <p className="about">
                        Browse,
                        <br/>
                        Bargain.
                        <br/>
                        EveryOne Gains
                    </p>
                </div>
            </section>
            <Link to="/login">
                <button className="start_now_btn">Shop Now</button>
            </Link>

        </div>
    )
}
