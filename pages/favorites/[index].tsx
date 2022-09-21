import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getTokenHeaders } from "../../common/requestsToBackEnd"
import CommonHead from "../../components/CommonHead"
import PagePanel from "../../components/PagePanel"
import ProductList from "../../components/ProductsList"
import { IShortProduct } from "../../interfaces/IProduct"
import { selectAuthState } from "../../store/authSlice"


const Favorites = () =>{
    const currentState = useSelector(selectAuthState)
    const dataRoute = useRouter()
    const [count, setCount] = useState(0)
    const [products, setProducts]: [IShortProduct[]|undefined, Function] = useState()
    //its uncorrect, but i can`t obtain state on getServerSideProps
    useEffect(()=>{
        const query = async() =>{
            const resultRequest = await axios.get(process.env.BACKEND_URL+`/api/product/favorites?page=${dataRoute.query.index || 1}`, getTokenHeaders(currentState.token))       
            setProducts(resultRequest.data.data)
            setCount(products?.length || 0)
        }
        query()
        console.log(products)
    },[])
    return (<>
            <CommonHead title='Favorites'/>
            <ProductList name={'Favorites'} idGroup ={Number(dataRoute.query.idGroup)} dataElemets={products}/>
            <PagePanel countElement={Number(count)} countElementsOnPage={12} currentPage={Number(dataRoute.query.pageNumber)} paternLink={`/favorites/`} />
        </>
    )
}

// interface extentendNextPageContext extends GetServerSidePropsContext{
//     query:{
//         index: string
//     }     
// }


// export const getServerSideProps =async({query}: extentendNextPageContext) => {
//     //need get token from redux and transfer it as params function getTokenHeaders()
//     const token = ''
//     const resultRequest = await axios.get(process.env.BACKEND_URL+`/api/product/favorites?page=${query.index || 1}`, getTokenHeaders(token))
       
//     const {count, rows} = resultRequest.data.data
//     return {
//         props: {
//             count,
//             products: rows
//         },
//     }
// }

export default Favorites