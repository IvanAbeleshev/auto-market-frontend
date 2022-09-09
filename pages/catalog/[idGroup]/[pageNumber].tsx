import axios from 'axios'
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext} from 'next'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import BottomMessage from '../../../components/BottomMessage'
import CommonHead from '../../../components/CommonHead'
import PagePanel from '../../../components/PagePanel'
import ProductList from '../../../components/ProductsList'
import { IShortProduct } from '../../../interfaces/IProduct'

interface IPropsGroupCatalog{
    allProducts?: IShortProduct[],
    count?: number
}

const GroupCatalog = ({count, allProducts}:IPropsGroupCatalog) =>{
    const dataRoute: NextRouter = useRouter()
    const [visibleMessage, setVisibleMessage] = useState(false)
    return (
        <>
            {
                //maybe will use redux to save curent catalogname and id for title
            }
            <CommonHead title="Catalog"/>
            <ProductList name={String(dataRoute.query.idGroup)} idGroup ={Number(dataRoute.query.idGroup)} dataElemets={allProducts}/>
            <PagePanel countElement={Number(count)} countElementsOnPage={12} currentPage={Number(dataRoute.query.pageNumber)} paternLink={`/catalog/${dataRoute.query.idGroup}/`} />
            <BottomMessage visible={visibleMessage} setVisible={setVisibleMessage}>
                <h1>This title message</h1>
                <h3>we added some product to the basket</h3>
            </BottomMessage>
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