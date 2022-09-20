import axios from "axios"
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext } from "next"
import { useRouter } from "next/router"
import { currentServerSideToken, getTokenHeaders } from "../../common/requestsToBackEnd"
import CommonHead from "../../components/CommonHead"
import PagePanel from "../../components/PagePanel"
import ProductList from "../../components/ProductsList"
import { IShortProduct } from "../../interfaces/IProduct"
import { wrapper } from "../../store/store"

interface IPropsFavorites{
    count: number,
    products: IShortProduct[]
}

const Favorites = ({count, products}:IPropsFavorites) =>{
    const dataRoute = useRouter()
    return (<>
            <CommonHead title='Favorites'/>
            <ProductList name={'Favorites'} idGroup ={Number(dataRoute.query.idGroup)} dataElemets={products}/>
            <PagePanel countElement={Number(count)} countElementsOnPage={12} currentPage={Number(dataRoute.query.pageNumber)} paternLink={`/favorites/`} />
        </>
    )
}

interface extentendNextPageContext extends NextPageContext{
    query:{
        index: string
    }     
}

export const getServerSideProps = wrapper.getServerSideProps(store => (ctx: GetServerSidePropsContext) => {
    console.log(store.getState())
    return {
            props: {
            },
        }
  });

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