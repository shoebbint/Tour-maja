import React, { useEffect, useState } from 'react';

const UsePlaces = () => {
    const [places,setPlaces]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setPlaces(data));
    },[])
    return [places,setPlaces];
};


export default UsePlaces;
