import { useEffect, useState } from "react";

const useBodyData=()=>{
    const [bodyDataJson,setBodyDataJson] = useState([]) 
    useEffect(()=>{
        fetchData();
       },[])

     
    const fetchData= async()=>{
    
    /* const data= await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9715987&lng=77.5945627&carousel=true&third_party_vendor=1")
    const json = await data.json();
    console.log(json) 
    setBodyDataJson(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) */
    const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627")
    const json = await data.json()
    console.log(json)
    setBodyDataJson(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }   
    return bodyDataJson 
    
}
export default useBodyData