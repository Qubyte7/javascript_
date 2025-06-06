import client from "./client"

export const registerUser = async (userData) => {
    try {
        const response=await client.post('/users/signup',userData)
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message||"Something went wrong while registering user")
    }
}