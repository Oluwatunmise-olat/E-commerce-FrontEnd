import React, {useState, useEffect } from "react";
import { axiosInstance } from "./my_axios_request";
import axios from "axios";
import {getCategoriesUrl} from "./urls";
import {getToken} from "./localStorage";

export default function Category(){

    const [categories, setCategories] = useState(null);

    useEffect(()=>{
        let _token = getToken();
        axios({
            url: getCategoriesUrl,
            method: 'GET',
            headers:{
                Authorization: `Bearer ${_token}`,
                'Content-Type': 'application/json' 
            }
        })
        .then(resp=>{
            setCategories(resp.data.data);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }, []);

    return (
        <React.Fragment>
            <h2>All</h2>
            {categories && categories.map((item, index)=>{
                return (
                    <h2 key={item.id}>{item.name}</h2>
                )
            })}
        </React.Fragment>
    )
}
