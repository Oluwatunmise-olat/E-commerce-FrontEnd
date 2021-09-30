import React from "react";
import axios from "axios";
import { FaStarHalf, FaStar } from "react-icons/fa";
import {axiosInstance} from "./my_axios_request";
import { getProductsUrl } from "./urls";

// styles
import "../styles/products.css";

//img for testing
import TestImg from "../img/test-img.png";

// components
import Categories from "./category";

export default function Products(){

    const [products, setProducts] = React.useState();

    React.useEffect(()=>{
        setTimeout(()=>axiosInstance({
            method: 'GET',
            url: getProductsUrl,
            headers: {
                Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))["access_token"]}`
            }
        })
        .then(resp=>{
            console.log(resp);
            setProducts(resp.data.data);
        })
        .catch(err=>{
            console.log(err.response);
            if (err.response.status == 403){
                let originalReq = err.response.config;
                axios({
                    method: "POST",
                    url: "http://127.0.0.1:8000/gateway/token/refresh",
                    data: {
                        refresh: JSON.parse(window.localStorage.getItem("token"))["refresh_token"]
                    }
                })
                .then(resp=>{
                    console.log(resp, "neww")
										window.localStorage.setItem("token", JSON.stringify({"access_token": resp.data.access, "refresh_token": resp.data.refresh}))
										originalReq.headers = {
											Authorization: `Bearer ${resp.data.access}`
										}
										return axios(originalReq);
                })
                .catch(err=>{
                    console.log("fail");
                    console.log(err.response.config.data)
                    console.log(err.response)
                    if (err.response.status === 400 && err.response.data.error == 'Not Found'){
                        // return window.location.href = "/login";
												console.log("we gast login agsin")
                    }else{
                        console.log(err.response, "stuck")
                    }
                })
            }
        })
        , 3000)
    }, [])

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
                        {products && products.map((item, index)=>{
                           return (<>
															<div style={{width: "100%", height: "300px"}} className="product-img">
																<img style={{maxWidth: "100%", maxHeight: "100%"}} src={item.image} alt="product image" />
															{/* <img style={{maxWidth: "100%", maxHeight: "100%", display: "none"}} src={TestImg} alt="product image" /> */}
															</div>

															<div className="product-details">
																	{/* should contain product avg rating,
																			Name, price
																		*/}
																	<p className="name">{item.name}</p>
																	<p className="avg-rating">5<i><FaStar/></i></p>
																	<p className="price"> NGN {item.price}</p>
															</div>

                            </>)
                        })
                        }
                    </div>
                </article>
            </section>
        </section>
    )
}