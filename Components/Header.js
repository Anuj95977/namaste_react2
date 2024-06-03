import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header =()=>{
  const [login, setLogin]=useState("Login")
  const onlineStatus= useOnlineStatus()
   
    return (
        <div className="flex justify-between bg-gradient-to-b from-gray-200 to-beige-200 shadow-lg h-auto ">
          <div className="logoContainer">
            <img className="w-40" src={LOGO_URL}/>
          </div> 
          <div className="flex  ">
            <ul className="flex items-center gap-x-6 text-lg font-seri">
                <li >Online status:{onlineStatus? "💚" : "❤️" }</li>
                <Link to={"/"}><li className="hover:underline hover:text-xl">Home</li></Link>
                <Link to={"/about"}><li className="hover:underline hover:text-xl">About Us</li></Link>
                <Link to={"/contact"}><li className="hover:underline hover:text-xl">Contact Us</li></Link>
                <li className="hover:underline hover:text-xl" >Cart</li>
                <button className="hover:underline hover:text-xl"
                onClick={()=>{
                  if(login==="Login")setLogin("Logout")
                  else{
                    setLogin("Login")
                  }
                }}>{login}</button>
            </ul>
          </div>
        </div>
    )
}
export default Header