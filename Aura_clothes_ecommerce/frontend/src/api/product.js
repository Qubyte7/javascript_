import client from "./client"

export const getAllProducts=async()=>{
    try {
        const response=await client.get('/products/1',{
            withCredentials:true
        })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message||"Something went wrong while getting all products")
    }
}