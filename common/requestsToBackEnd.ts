import axios from "axios"

export const checkUserByToken = async(token:string) =>{
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const resultQuery = await axios.get(process.env.BACKEND_URL+'/api/user/check', config )
    if(resultQuery.status === 200){
        return resultQuery.data.data
    }

    return undefined
}

export const addProductToFavorites = async(productId:number, token:string) =>{
    const queryResult = await axios.post(process.env.BACKEND_URL+'/api/favorites/add', {productId}, getTokenHeaders(token))

    if(queryResult.status === 200){
        return true
    }

    return false
}

export const getTokenHeaders = (token:string) =>{
    return {headers:{ Authorization: `Bearer ${token}` }}
}