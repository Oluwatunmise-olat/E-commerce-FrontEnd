import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaStarHalf, FaStar } from "react-icons/fa";
import {axiosInstance} from "./my_axios_request";
import { getProductsUrl } from "./urls";
import { getToken } from "./localStorage";
import NavBar from "./navigation";

// styles
import "../styles/products.css";

//img for testing
import TestImg from "../img/test-img.png";

// components
import Categories from "./category";

export default function Products(){

    const [products, setProducts] = React.useState();

    useEffect(()=>{
        let _token = getToken();
        axios({
            method: 'GET',
            url: getProductsUrl,
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${_token}`
            }
        })
        .then(resp=>{
            // console.log(resp);
            setProducts(resp.data.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }, []);

    return (
        <React.Fragment>
        <NavBar/>
        <section className="products-section">
            {/* hero section */}
            <div className="products-slider">
            </div>

            {/* products display and categories */}
            <section className="products-main">
                {/* category section */}
                <article className="left-section">
                    <div className="category-card">
                        <p className="header">Categories</p>
                        <div className="category-list">
                            <Categories />
                        </div>
                    </div>
                </article>
                {/* products section */}
                <article className="right-section">
                    <p>{products ? products.length : ""} Product{products ? products.length > 1 ? "s" : "" : ""} Found</p>
                    {products && products.map((item, index)=>{
                        return (
                    <div className="product-card">
                        <div style={{width: "100%", height: "300px"}} className="product-img">
                            <Link to={`/product-detail/${item.slug}`}>
                            <img style={{maxWidth: "100%", maxHeight: "100%"}} src={item.image} alt="product image" />
                            </Link>
                        </div>
                        <div className="product-details">
                            {/* should contain product avg rating,
                                    Name, price
                                */}
                            <div className="price-name">
                                <p className="name">Product Name: {item.name}</p>
                                <p className="price">Product Price: NGN {item.price}.00</p>
                            </div>
                            <p>Available: {item.availability_status}</p>
                            {/* <p className="category">Category: {item.category_name}</p> */}
                            {/* <p>{item.seller} owner id</p> */}
                            {/* <p>{item.seller_name} owner</p> */}
                            <p className="avg-rating">Rating: 5<i><FaStar/></i></p>
                            <p className="btns">
                                <button>Bargain with seller</button>
                                <button>Add to Cart</button>
                            </p>
                        </div>
                    </div>
                        )})
                    }
                </article>
            </section>
        </section>
        </React.Fragment>
    )
}