import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { registerUser } from "../api/auth";
import Cookie from "js-cookie"
import { useNavigate } from "react-router-dom";


export const useRegister=()=>{
    const navigate=useNavigate()

    return useMutation({
        mutationFn:registerUser,
        mutationKey:['registerUser'],
        onSuccess:(data)=>{
            toast.success("User registered successfully")
            Cookie.set("AccessToken",data.token)
            navigate("/home")
        },
        onError:(error)=>{
            toast.error(error.message)
        }
    })
}


