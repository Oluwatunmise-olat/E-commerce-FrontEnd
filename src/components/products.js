import React from "react";
import { FaStarHalf, FaStar } from "react-icons/fa";

// styles
import "../styles/products.css";

//img for testing
import TestImg from "../img/test-img.png";

// components
import Categories from "./category";

export default function Products(){
    return (
        <section className="products-section">
            {/* hero section */}
            <div className="products-slider">
            </div>
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
                    <p>4 products found</p>
                    <div className="product-card">
                        {/* if bargain is true set height to 100px else 300px */}
                        {/* <div style={{width: "100%", height: "100px"}} className="bargain product-img"> */}
                        <div style={{width: "100%", height: "300px"}} className="product-img">
                            <img style={{maxWidth: "100%", maxHeight: "100%"}} src={TestImg} alt="product image" />
                            {/* <img style={{maxWidth: "100%", maxHeight: "100%", display: "none"}} src={TestImg} alt="product image" /> */}
                        </div>

                        <div className="product-details">
                            {/* should contain product avg rating,
                                Name, price
                             */}
                            <p className="name">armchair</p>
                            <p className="avg-rating">5<i><FaStar/></i></p>
                            <p className="price"> NGN 125.99</p>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}