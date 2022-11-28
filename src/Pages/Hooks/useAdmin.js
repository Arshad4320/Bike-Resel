
import { useContext, useEffect, useState } from "react"
import { AuthProvider } from "../Context/AuthContext";
const useAdmin=email=>{
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        if(email){
            
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin)
                
            })
        }
    },[email])
    return(isAdmin)
}
export default useAdmin;