import React from "react";
import { Link } from "react-router-dom";

//styles
import "../styles/productDetail.css";

//test image
import TestImg from "../img/test-img.png";

export default function productDetail (){
    return (
        <section>
            <div className="product-detail-slider">
            </div>
            <Link className="back-to-home-btn" to="/home">back to products</Link>
            
            <div className="product-detail-flex">
                <div className="product-img">
                    <img style={{maxWidth: "100%", maxHeight: "100%"}} src={TestImg} alt="product detail image" />
                </div>
                <div className="product-detail-info">
                    <p className="item-name">Item Name: Wood</p>  
                    <p className="product-description">Product Description: Lorem jdkis odjsoon...</p>
                    <p className="seller">seller: Olt</p>
                    <p className="price">Price: NGN 1499.99</p>
                    <p className="category">Category: Furniture</p>
                    <p className="available">Available: True</p>
                    <button className="chat-merchant">Chat with Merchant</button>
                    <button className="add-to-cart">add to cart</button>
                </div>
            </div>

            {/* 
                seller,
                name,
                category,
                availability,
                product description,
                image,
                price,

                RATING**
             */}
        </section>
    )
}