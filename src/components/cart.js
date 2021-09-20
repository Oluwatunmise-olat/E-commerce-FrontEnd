import React from "react";
import {FaMinus, FaPlus, FaTrash } from "react-icons/fa";

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

            <div className="svg-flx" style={{height: "100%", width: "50%"}}>
                <img src={`${CartSvg}`} style={{width: "100%", height: "300px"}} alt="cart svg" />
            </div>

            {/* if cart isn't empty */}
            <div className="cart-items">
                <table>
                    <tr className="tr-headings">
                        <td>item</td>
                        <td>price</td>
                        <td>quantity</td>
                        <td>subtotal</td>
                    </tr>
                    <tr>
                        <td className="item">
                            <div className="item-flex">
                                <div style={{width: "50%"}}>
                                    <img style={{width: "100%"}} src={TestImg} alt="product image" />
                                </div>
                                <p className="item-name">Nike</p>
                            </div>
                        </td>
                        <td className="price">
                            <p>NGN 200.00</p>
                        </td>
                        <td className="quantity">
                            <div className="quantity-flex">
                                <i><FaMinus/></i>
                                <p>1</p>
                                <i><FaPlus/></i>
                            </div>
                        </td>
                        <td className="subtotal">
                            <div className="subtotal-flex">
                                <p>NGN 200.00</p>
                                <i><FaTrash/></i>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="continue-clear-btn">
                    <button className="continue-shopping">
                        continue shopping
                    </button>
                    <div>
                        <button className="clear-btn">
                            clear shopping cart
                        </button>
                        <div className="checkout-card">
                        </div>
                    </div>
            </div>

        </section>
    )
}
