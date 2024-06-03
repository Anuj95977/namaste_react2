import { CDN_URL} from "../utils/constant";

const RestaurantCard =({resData})=>{
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,sla     
    } = resData?.info

  
    return (
    
    <div className="flex rounded-md w-[178px] h-[380px] overflow-hidden  bg-purple-200 flex-col  gap-y-1 ml-5 hover:border-2 border-solid border-black">
        <img className="w-[178px] h-[167px]"src={CDN_URL+cloudinaryImageId} />
        <h3 className="font-bold text-xl px-2">{name}</h3>
        <h4 className="px-2"> {cuisines.join(" , ")}</h4>
        <h4 className="px-2"> {avgRating} stars</h4>
        <h4 className="px-2">{sla.slaString}</h4>
    </div>
    )
}

// Higher Order Component 
// input- Restaurant Card, output-RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
   return (props)=>{
    return(
       <div>
         <label className="bg-black text-white ml-2 p-2 rounded-md absolute">Promoted</label>
         <RestaurantCard {...props}/>
       </div> 
    )
   } 
}
export default RestaurantCard