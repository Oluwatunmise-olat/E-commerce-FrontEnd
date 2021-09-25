import React from "react";
import { FaStarHalf, FaStar } from "react-icons/fa";

// styles
// import "../styles/produ.css";

//img for testing
import TestImg from "../img/test-img.png";

// components
import Categories from "./category";

export default function Products(){
    return (
        <React.Fragment>
            <div className="products-slider"></div>
            <section className="products-main">
                <article className="left-section">
                    <div className="category-card">
                        <p className="header">Category</p>
                        <div className="category-list">
                            <p>all</p>
                            <Categories />
                        </div>
                    </div>
                </article>
                <article className="right-section">
                    <p>comme</p>
                </article>
            </section>
        </React.Fragment>
    )
}