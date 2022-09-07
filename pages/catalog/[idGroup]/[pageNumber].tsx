import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext} from 'next'
import { NextRouter, useRouter } from 'next/router'
import CommonHead from '../../../components/CommonHead'
import ProductList from '../../../components/ProductsList'
import { IProduct, IShortProduct } from '../../../interfaces/IProduct'

interface IPropsGroupCatalog{
    allProducts?: IShortProduct[],
    count?: number
}

const GroupCatalog = ({count, allProducts}:IPropsGroupCatalog) =>{
    const dataRoute: NextRouter = useRouter()
    return (
        <>
            {
                //maybe will use redux to save curent catalogname and id for title
            }
            <CommonHead title="Catalog"/>
            <ProductList name={String(dataRoute.query.idGroup)} idGroup ={Number(dataRoute.query.idGroup)} dataElemets={allProducts}/>
        </>
    )
}

interface extentendNextPageContext extends NextPageContext{
    query:{
        idGroup: string,
        pageNumber: string
    }     
}

export const getServerSideProps = async({query}: extentendNextPageContext)=>{
    //create product request
    const responseData = await axios.get(`${process.env.BACKEND_URL}/api/product/?typeId=${query.idGroup}&page=${query.pageNumber || 1}`)
    const {count, rows} = responseData.data.data
    return {
        props: {
            count,
            allProducts: rows
        },
    }
  }

export default GroupCatalog