import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link, useAsyncError } from 'react-router-dom'
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=> {
    
    const [listOfRestaurants,setListOfRestaurants]= useState([])
    const [filteredRestaurants,setFilteredRestaurants]= useState([])
    const [searchText, setSearchText]= useState("")
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    useEffect(()=>{
        fetchData();
       },[])
    
    
    const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627")
        const json = await data.json()
        console.log(json)
        setListOfRestaurants(json?.data?.success?.cards[4||3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.success?.cards[4||3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }   
        


    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) 
    return (
        <h1>You are Offline!!!</h1>
    )
     return (listOfRestaurants.length===0) ? <Shimmer /> :(
        <div className="body">
            <div className="flex gap-4 p-3 ">
               
                    <input type="text" className="border border-solid border-black p-0.5 " placeholder="Search Restaurants"
                    value={searchText}onChange={(e)=>
                        setSearchText(e.target.value)
                    }></input>
                   <button className="bg-slate-200 px-2 ml-1 rounded-md" onClick={()=>{const newfilter=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                   
                   setFilteredRestaurants(newfilter)
                   }}>Search</button>
                
                <button className="px-2 bg-slate-400 rounded-md"
                onClick={()=>{const newResList= listOfRestaurants.filter((restaurant)=>restaurant.info.avgRating > 4.5)
                  setFilteredRestaurants(newResList)}}>  Top Rated Restaurants</button>
            </div>
            <div className="flex gap-4 flex-wrap pl-5 mt-4">
                {
                filteredRestaurants.map((restaurant)=> <Link key={restaurant.info.id}to={"/restaurants/"+ restaurant.info.id}>{restaurant.info.promoted ?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard key={restaurant.info.id}resData={restaurant}/>)}
                </Link>)
                }
             </div>
        </div>
    )
}
export default Body