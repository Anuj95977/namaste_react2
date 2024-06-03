import { CDN_URL } from "../utils/constant"
import { useState } from "react"

const ItemList = ({items})=>{
  const [addItems,setAddItems]=useState(null)
  
  const handleAddItems=()=>{
   setAddItems(addItems+1)
  }
    return (
        <div>
         <ul>
            {items.map((item)=><div key={item.card.info.id}>
             <div className="flex justify-between border-b-4 border-gray-200 ">
              <div className="flex-col  w-9/12">
                <div className="text-2xl mt-4">{item.card.info.name}
                </div>
                <div className="text-base mb-2">
                ₹{Math.floor(item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100)}
                </div>
                <div className="text-yellow-700 text-sm mb-2">⭐{item.card.info.ratings.aggregatedRating.rating ? item.card.info.ratings.aggregatedRating.rating: "No Rating"}
                </div> 
                <div className=" pb-7 text-base text-neutral-600	">{item.card.info.description}
                </div> 
              </div>  
             <div className="w-3/12 ">
             <img src={CDN_URL+ item.card.info.imageId} className="w-40 h-auto rounded-lg"></img>
             <div className="ml-10  -mt-6 flex ">
             <span><button className="text-neutral-400 bg-neutral-50 rounded-l shadow-md" onClick={handleAddItems}>+</button></span>
             <span><button className="bg-neutral-50 text-green-600 shadow-md">Add </button></span>
             <span><button className="bg-neutral-50 text-neutral-400 rounded-r pr-2 shadow-md">-</button></span>
             </div>
             </div>
             </div> 
            </div>)}
         </ul>
        </div>
    )
}
export default ItemList