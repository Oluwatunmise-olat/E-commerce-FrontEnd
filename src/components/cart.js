import React from "react";
import {FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import {Link} from "react-router-dom";

// svg
import CartSvg from "../styles/svg/Cart.svg"

// styles
import "../styles/cart.css";

import TestImg from "../img/test-img.png"

export default function Cart (){
    return (
        <section>
            {/* if cart is empty */}
            <div className="cart-empty">
                <p> YOUR CART IS EMPTY</p>
            </div>

            <div className="svg-flx" style={{height: "100%", width: "100%"}}>
                <img src={`${CartSvg}`} style={{width: "100%", height: "300px"}} alt="cart svg" />
            </div>

            <table>
                <tr className="tr-headings">
                    <th>name</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>subtotal</th>
                    <th></th>
                </tr>
                <tr className="tr-body">
                    <td>Phone</td>
                    <td>
                        <i><FaMinus/></i>
                        <p>1</p>
                        <i><FaPlus/></i>
                    </td>
                    <td>NGN 399.99</td>
                    <td>NGN 400.00</td>
                    <td><i className="trash"><FaTrash/></i></td>
                </tr>
            </table>
            <div className="btn-section">
                <button className="continue-shopping"><Link to="/products">continue shopping</Link></button>
                <button className="clear-btn">clear shopping cart</button>
            </div>
            <div className="checkout">
                <p>subtotal: NGN 400.00</p>
            </div>
            <button className="wallet-transfer">Wallet wire</button>

        </section>
    )
    }
