import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getToken } from "./localStorage";
import { searchUrl } from "./urls";
import SearchSvg from "../styles/svg/search.svg";
import NavBar from "./navigation";

const style = {
	width: "100%",
	maxHeight: "200px"
}

const searchEmpty = {
	padding: "10px",
	width: "50%",
	margin: "auto",
	marginTop: "30px",
	textAlign: "center"
}

const backHome = {
	marginLeft: "16%",
	border: "1px solid",
	borderRadius: "4px",
	color: "white",
	backgroundColor: "hsl(0, 0%, 29%)",
	fontSize:"15px",
	textTransform: "capitalize",
	padding: "10px",
	width: "auto"
}


export default function Search(){

    const {q} = useParams();
    const [searchResult, setSearchResult] = useState([]);
    const _token = getToken();

    useEffect(() => {
        axios({
            method: 'GET',
            url: searchUrl + `${q}`,
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`
            }
        })
        .then(resp=>{
            console.log(resp.data);
            setSearchResult(resp.data.data)
        })
        .catch(err=>{
            console.log(err.response);
        })
    }, []);

    return (
        <section>
					<NavBar/>
					<img src={SearchSvg} style={{...style}} alt="search svg" />
					{searchResult.length < 1 &&
							<div style={{...searchEmpty}} className="search-empty">
									<p> YOUR CART IS EMPTY</p>
							</div>
					}
					<button  style={{...backHome}} ><Link to="/product">BACK TO HOME</Link></button>
					<article style={{width: "70%", margin: "auto"}} className="right-section">
						<p style={{textAlign: "center"}}>{searchResult ? searchResult.length : ""} Product{searchResult? searchResult.length > 1 ? "s" : "" : ""} Found</p>
						{searchResult && searchResult.map((item, index)=>{
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
										<p>Available: {item.availability_status ? "True": "False"}</p>
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
    )
}