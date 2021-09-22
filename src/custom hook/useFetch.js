import React, {useState, useEffect} from "react";

export default function useFetch(url, method=null, data=null){

    const [receivedData, setReceivedData] = useState({status: "", data: ""});

    useEffect(()=>{
        fetch(url)
        .then(resp=>{
            resp.json();
        })
        .then(data=>{
            setReceivedData({status: true, data: data});
        })
        .catch(err=>{
            setReceivedData({status: false, data: err});
        })
    })

    return [receivedData]
}