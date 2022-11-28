import { useContext, useEffect, useState } from "react"
import { AuthProvider } from "../Context/AuthContext";

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://bike-server-seven.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                })
        }
    }, [email])
    return [isBuyer]
}
export default useBuyer;