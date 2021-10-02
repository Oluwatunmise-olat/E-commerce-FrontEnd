import React from "react";
import {FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {Link} from "react-router-dom";
import { generalCartUrl } from "./urls";
import Navbar from "./navigation";

// svg
import CartSvg from "../styles/svg/Cart.svg"

// styles
import "../styles/cart.css";

import TestImg from "../img/test-img.png"
import axios from "axios";
import { getToken } from "./localStorage";

export default function Cart (){

    const [cartItems, setCartItems] = React.useState({id: ""});
    const _token = getToken();

    React.useEffect(()=>{
        axios.get(generalCartUrl, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`
            }
        })
        .then(resp=>{
            console.log(resp.data.data);
            setCartItems(resp.data.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }, []);
    {cartItems && console.log(cartItems)}

    return (
        <section>
            <Navbar/>
            {/* if cart is empty */}
            {cartItems.length < 1 &&
                <div className="cart-empty">
                    <p> YOUR CART IS EMPTY</p>
                </div>
            }
            {cartItems.length >= 1 && cartItems.map((item, index)=>{
            return (
            <React.Fragment key={item.id}>
                <div className="svg-flx" style={{height: "100%", width: "100%"}}>
                    <img src={CartSvg} style={{width: "100%", height: "300px"}} alt="cart svg" />
                </div>

                <table>
                    <tbody className="tbody-headings">
                        <th>name</th>
                        <th>quantity</th>
                        <th>price</th>
                        <th>subtotal</th>
                        <th></th>
                    </tbody>
                    <tbody className="tbody-body">
                        <td>{item.product_name}</td>
                        <td>
                            <i><FaMinus/></i>
                            <p>{item.quantity}</p>
                            <i><FaPlus/></i>
                        </td>
                        <td>NGN {item.product_price}</td>
                        <td>NGN {item.product_price * item.quantity}</td>
                        <td><i className="trash"><FaTrash/></i></td>
                    </tbody>
                </table>
            </React.Fragment>
    )})})
            <div className="btn-section">
                <button className="continue-shopping"><Link to="/product">continue shopping</Link></button>
                <button className="clear-btn">clear shopping cart</button>
            </div>
            <div className="checkout">
                <p>subtotal: NGN 400.00</p>
            </div>
            <button className="wallet-transfer">Wallet wire</button>
        </section>
    )
    }
