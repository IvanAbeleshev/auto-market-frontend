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