import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/product"

export const useGetAllProduct=()=>{
    return useQuery({
        queryKey:['all-products'],
        queryFn:getAllProducts,
        refetchOnMount:true,
        retry:1
    })
}