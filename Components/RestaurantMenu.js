import Shimmer from './Shimmer'
import star from"./star.png"
import { useParams } from 'react-router-dom'
import useRestaurantantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from "./RestaurantCategory"
import { useState } from 'react'

const RestaurantMenu = () => {
    
    const [showIndex,setShowIndex]=useState(null)
    
    const {resId}= useParams()
    console.log(resId)

    const resInfo= useRestaurantantMenu(resId)
  
    if(resInfo===null) return  <Shimmer /> 
    
    const {name,cuisines,cloudinaryImageId,costForTwoMessage,avgRatingString,areaName,totalRatingsString,sla}=resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR)
    const recommended = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.title

    const categories =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    return(
   
    <div className='mt-1 pt-5 ml-auto mr-auto w-3/4  bg-gradient-to-b from-pink-100 to-beige-100	'>
        <div className='nameAndTitle'>
        <h1>{name}</h1>
        <div className=' menuCardTitle'>
        <div className='menuTitle'>
        <img src="https://www.freeiconspng.com/thumbs/stars-png/yellow-star-png-image--yellow-star-png-image-2.png"></img>
        <h3>{avgRatingString}rating {`(${totalRatingsString})`} - {costForTwoMessage}</h3>
        </div>
        <div className="cuisines">
        <h3>{cuisines.join(" , ")}</h3>
        </div>
        <div className='outlet'>
            <img src='https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-destinations-holidays-travel-tour-vacations-png-image_5683178.png'></img>
            <div>
            <h3>Outlet <span className='areaName'>{areaName}</span></h3>
            <h3>25 mins</h3>
            </div>
        </div>
        </div>
        </div>
        <br></br>
        <div>
        <h2 className='text-neutral-900 ml-5'>Menu</h2>
            <div >
            
            <p>{categories.map((category,index)=>(<RestaurantCategory data={category?.card?.card} key={category?.card?.card?.title} showItems={index===showIndex?true:false}
            setShowIndex={()=>   setShowIndex(index)}/>))}</p>
          </div>
        </div>
    </div>
    )
}

export default RestaurantMenu