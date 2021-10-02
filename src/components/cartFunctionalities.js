import axios from "axios";
import { generalCartUrl } from "./urls";

export default function AddToCart(_token, id){
    let resp = "";
   axios({
       method: 'POST',
       url: generalCartUrl,
       headers: {
           'Content-Type': 'application/json',
           Authorization: `Bearer ${_token}`
       },
       data: {
            product: id
       }
   })
   .then(resp=>{
       resp = resp;
       return resp.data;
   })
   .catch(err=>{
       resp  = err.response;
       return err.response;
    })
    return resp;
}

export const EditCartProductQuantity = (_token, product_id, quantity) =>{
    let resp = "";
    axios({
        method: 'PATCH',
        url: generalCartUrl,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${_token}`
        },
        data: {
             product: product_id,
             quantity: quantity
        }
    })
    .then(resp=>{
        resp = resp;
        return resp.data;
    })
    .catch(err=>{
        resp  = err.response;
        return err.response;
     })
    console.log(resp)
    return resp;
 
}