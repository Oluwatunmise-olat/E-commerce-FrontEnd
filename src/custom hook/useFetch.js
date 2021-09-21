import React, {useState, useEffect} from "react";

export default function useFetch(url){

    const [response, setResponse] = useState({status: "", data: ""});

    useEffect(()=>{
        fetch(url)
        .then(resp=>{
            resp.json();
        })
        .then(data=>{
            setResponse({status: true, data: data});
        })
        .catch(err=>{
            setResponse({status: false, data: err});
        })
    })

    return (
        response
    )
}