import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
  //Chech if online or not
  const [onlineStatus,setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online", ()=>{
            setOnlineStatus(true)
        })
        
    },[]) 

    // It should be in Boolea
  return onlineStatus
}

export default useOnlineStatus