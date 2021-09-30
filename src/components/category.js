import React, {useState, useEffect } from "react";
import { axiosInstance } from "./my_axios_request";
import {url, refreshTokenUrl} from "./urls";

function get_token(){
    // return JSON.parse(window.localStorage.getItem("token"));
}

export default function Category(){

    // useEffect(()=>{
    //     axiosInstance({
    //         method: "GET",
    //         url: '/inventory/category/'
    //     })
    //     .then(response=>{
    //         console.log(response);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }, [])

    const [categories, setCategories] = useState(null);
    const [token, setToken] = useState(get_token());

    return (
        <React.Fragment>
            <h2>Category</h2>
        </React.Fragment>
    )
}
