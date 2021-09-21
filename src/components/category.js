import React, {useState, useEffect } from "react";

import { generateId } from "../randomId";

const url = "http://localhost:8000/inventory/category/"

export default function Category(){

    const [categories, setCategories] = useState(null);

    useEffect(()=>{
       fetch(url)
       .then(resp => resp.json())
       .then(resp => {
           setCategories(resp);
       })
       .catch(err =>{
           console.log(err);
       })
    },  []);

    // refactor at backend to return category id
    
    {categories && categories.data.map(elm=>{
        elm.id = generateId();
        return elm;
    })}

    return (
        <React.Fragment>
            {categories && categories.data.map(elm=>{
                return (
                    <p key={elm.id}>{elm.name}</p>
                )
            })}
        </React.Fragment>
    )
}
