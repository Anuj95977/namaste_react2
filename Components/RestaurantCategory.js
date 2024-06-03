import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory =({data,showItems,setShowIndex})=>{

 

  handleClick=()=>{
    setShowIndex()
  }
    return (
      <div>
        <div className="pl-12  pr-10 mt-4 text-xl shadow-md py-3 border-t-4 border-black-300 bg-slate-100 ">
            <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
            <span className="font-bold ">{data.title}({data.itemCards.length})
            </span>
            <span>{showItems ? <img className="  w-12 h-12" src="https://static.thenounproject.com/png/2022881-200.png" ></img>:<img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/32/32213.png"></img>}</span>
            </div>
            <div>{showItems &&<ItemList items={data.itemCards} />}
            
            </div>
        </div>
       
       </div>
    )
}
export default RestaurantCategory