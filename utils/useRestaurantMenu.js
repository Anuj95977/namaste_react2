import { useEffect, useState } from "react";
import { MenuAPI } from "./constant";

const useRestaurantantMenu =(resId)=>{
    
    const [resInfo,setResInfo]=useState(null)

    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async()=>{
        const data=await fetch(MenuAPI+resId)
        const json= await data.json();
        setResInfo(json.data)
    }
    return resInfo;   
}

export default useRestaurantantMenu;