import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleProductUrl } from "./urls";

//styles
import "../styles/productDetail.css";

//test image
import TestImg from "../img/test-img.png";
import axios from "axios";
import { getToken } from "./localStorage";
import NavBar from "./navigation";
import AddToCart from "./addToCart";

const ProductDetail = () => {

    const {slug} = useParams();
    const _token = getToken();
    const [product, setProduct] = React.useState();
    const [messageFlash, setMessageFlash] = useState();

    const toCart = (id) => {
        let resp = AddToCart(_token, id);
        if (resp.status === 201)return setMessageFlash({type:"success", message: "Item Added to Cart"});
        else setMessageFlash({type:"failed", message:"Item Already in Cart"});
        return null
    }

    React.useEffect(()=>{
        const SingleProductUrl = getSingleProductUrl + `${slug}/`;
        
        axios({
            method: 'GET',
            url: SingleProductUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`
            }
        })
        .then(resp=>{
            // console.log(resp.data.data);
            setProduct(resp.data.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }, [])


    return (
        <React.Fragment>
            <NavBar />
        <section>
            <div className="product-detail-slider">
            </div>
            <Link className="back-to-home-btn" to="/">back to products</Link>
            
            {product &&
            <div className="product-detail-flex">

                <div className="product-img">
                    <img style={{maxWidth: "100%", maxHeight: "100%"}} src={product.image} alt="product detail image" />
                </div>
                <div className="product-detail-info">
                    <p className="item-name">Item Name: {product.name}</p>  
                    <p className="product-description">Product Description: {product.product_description}</p>
                    <p className="seller">seller: {product.seller_name}</p>
                    <p className="price">Price: NGN {product.price}.00</p>
                    <p className="p-category" style={{marginLeft: "0px"}}>Category: {product.category_name}</p>
                    <p className="available">Available: {product.availability_status ? "True": "False"}</p>
                    <p className="btns">
                        <button>Bargain with seller</button>
                        <button onClick={
                            ()=>toCart(product.id)
                        }>{messageFlash ? "Check Cart" : "Add to Cart"}</button>
                    </p>
                </div>
            </div>
            }

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
        </React.Fragment>
    )
}

export default ProductDetail;