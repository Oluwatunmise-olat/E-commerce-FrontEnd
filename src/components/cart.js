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
import { EditCartProductQuantity } from "./cartFunctionalities";

export default function Cart (){

    const [cartItems, setCartItems] = React.useState({id: ""});
    const [actionChanged, setActionChanged] = React.useState();
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
    }, [actionChanged]);

    const deleteCartItem = (e, id) => {
        e.preventDefault();
        console.log(id)
        axios({
            method: 'DELETE',
            url: generalCartUrl + `${id}/`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`
            }
        })
        .then(resp=>{
            console.log(resp.data);
            setCartItems(resp.data.data);
            setActionChanged(true);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }

    const clearCart = (e) =>{
        e.preventDefault();
        axios({
            method: 'DELETE',
            url: generalCartUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${_token}`
            }
        })
        .then(resp=>{
            console.log(resp.data);
            setCartItems(resp.data.data);
            setActionChanged(true);
        })
        .catch(err=>{
            console.log(err.response);
        })

    }

    const handleEdit = (e, product_id, quantity) =>{
        e.preventDefault();
        let action = e.target.id;
        console.log(action)
        if (action === "increament"){
            console.log("incr")
            // let resp = EditCartProductQuantity(_token, product_id, quantity + 1);
            axios({
                method: 'PATCH',
                url: generalCartUrl,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${_token}`
                },
                data: {
                     product: product_id,
                     quantity: quantity + 1
                }
            })
            .then(resp=>{
                console.log(resp.data)
                setCartItems(resp.data.data);
                setActionChanged(true)
                // return resp.data;
            })
            .catch(err=>{
                let resp  = err.response;
                console.log(resp)
                return resp;
             })
        }
        else if (action === 'decreament'){
            console.log("decr")
            // let resp =EditCartProductQuantity(_token, product_id, quantity -1);
            axios({
                method: 'PATCH',
                url: generalCartUrl,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${_token}`
                },
                data: {
                     product: product_id,
                     quantity: quantity > 1 ? quantity - 1 : 1
                }
            })
            .then(resp=>{
                console.log(resp.data)
                setCartItems(resp.data.data);
                setActionChanged(true)
                // return resp.data;
            })
            .catch(err=>{
                let resp  = err.response;
                console.log(resp)
                return resp;
             })
        }
        else return null;
    }

    let subtotal = 0;
    {cartItems.length >= 1 && cartItems.map((item, index)=>{
        subtotal+= item.product_price * item.quantity
    })}

    return (
        <section>
            <Navbar/>
            {/* if cart is empty */}
            {cartItems.length < 1 &&
                <div className="cart-empty">
                    <p> YOUR CART IS EMPTY</p>
                </div>
            }
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
            {cartItems.length >= 1 && cartItems.map((item, index)=>{
            return (
            <React.Fragment key={item.id}>

                    <tbody className="tbody-body">
                        <td>{item.product_name}</td>
                        <td>
                            <i><FaMinus onClick={(e)=>handleEdit(e, item.product, item.quantity)} style={{width: "30px"}} id="decreament"/></i>
                            <p>{item.quantity}</p>
                            <i><FaPlus onClick={(e)=>handleEdit(e, item.product, item.quantity)} style={{width: "30px"}} id="increament" /></i>
                        </td>
                        <td>NGN {item.product_price}</td>
                        <td>NGN {item.product_price * item.quantity}</td>
                        <td><i onClick={(e)=>deleteCartItem(e, item.id)} className="trash"><FaTrash/></i></td>
                    </tbody>
            </React.Fragment>    
            )})}

        </table>
        <div className="btn-section">
        <button className="continue-shopping"><Link to="/product">continue shopping</Link></button>
        <button onClick={clearCart} className="clear-btn">clear shopping cart</button>
        </div>
        <div className="checkout">
            <p>subtotal: NGN {subtotal}</p>
        </div>
        <button className="wallet-transfer">Wallet wire</button>

        </section>
    )
    }
