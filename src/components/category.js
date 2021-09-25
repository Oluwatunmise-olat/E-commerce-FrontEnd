import React, {useState, useEffect } from "react";

const url = "http://localhost:8000/inventory/category/"
const refreshTokenUrl = "http://localhost:8000/gateway/token/refresh" 

function get_token(){
    return JSON.parse(window.localStorage.getItem("token"));
}

export default function Category(){

    const [categories, setCategories] = useState(null);
    const [token, setToken] = useState(get_token());


    useEffect(()=>{
       fetch(url, {
           headers: {
               "Authorization": `Bearer ${token["access_token"]}`
           }
       })
       .then(resp=>{
           if (resp.status === 403){
               console.log("i caused it")
            // get new set of tokens
               fetch(refreshTokenUrl, {
                   method: 'POST',
                   body: JSON.stringify({
                       "refresh": `${token["refresh_token"]}`
                   }),
                   headers: {
                       "Content-Type": "application/json"
                   }
               })
               .then(resp=>{
                //    console.log(resp)
                   return resp.json()
               })
               .then(resp=>{
                   console.log(resp, "progress")
                   window.localStorage.setItem("token", JSON.stringify({access_token: resp["access_token"], refresh_token: resp["refresh_token"]}))
                   setToken(get_token());
               })
               .catch(err=> console.log(err))

            // retry the request
               fetch(url, {
                   headers: {
                       "Authorization": `Bearer ${token["access_token"]}`
                   }
               })
               .then(resp=>resp.json())
               .then(resp=>{
                   console.log(resp)
                   setCategories(resp)
               })
               .catch(err=>console.log(err))
           }else{
               return resp.json()
           }
       })
       .then(resp=>{
           setCategories(resp)
        })
       .catch(err=> console.log(err))
    }, [])

    
    return (
        <React.Fragment>
            {categories && categories.data.map(element=>{
                return (
                    <p key={element.id}>{element.name}</p>
                )
            })}
        </React.Fragment>
    )
}
