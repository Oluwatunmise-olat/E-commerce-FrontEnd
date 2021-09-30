import React, { useState, useEffect } from "react";
import axios from "axios";

// let getUrl = "http://127.0.0.1:8000/invent0ry/category/";

export default function LAxios(){

    useEffect(()=>{
        axios({
            method: "GET",
            url: "http://127.0.0.1:8000/inventory/product/",
        })
        .then(resp=>{
            console.log(resp);
        })
        .catch(err=>{
            if (err.response.status === 403){
                console.log(err.response, "response")
                axios.defaults.headers.common['Authorization'] = "Baerer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzI3NzI4NTIsInVzZXJfaWQiOjZ9._7GzCXWyesAYpWPpiVfNS6JDf8SqyTVdxPGWWfhwBb4"
                let initialRequest = err.response.config.url;
                let initailMethod = err.response.config.method.toUpperCase();
                axios({
                    method: initailMethod,
                    url: initialRequest
                })
                .then(resp=>{
                    console.log(resp, "retrieved data")
                })
                .catch(err=>{
                    console.log(err)
                })
            }else{
                console.log("no data")
            }
        })

        // axios.interceptors.request.use(
        //     config=>{
        //         console.log(config, "inter");
        //     }, err=>{
        //         console.log(err, "intercepted err");
        //     })
        
    }, [])


    // custom headers

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ejioiwhoiow'
        }
    }

    // global
    axios.defaults.headers.common['Authorization'] = 'sometoken';

    return (
        <h2>Axios</h2>
    )

}