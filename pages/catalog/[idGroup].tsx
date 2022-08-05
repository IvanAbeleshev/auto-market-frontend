import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext} from "next";
import { NextRouter, useRouter } from "next/router";
import CommonHead from "../../components/CommonHead";
import ProductList from "../../components/ProductsList";
import { IProduct } from "../../interfaces/IProduct";

interface IPropsGroupCatalog{
    allProducts?: IProduct[];
    count?: number;
}

const GroupCatalog = ({count, allProducts}:IPropsGroupCatalog) =>{
    const dataRoute: NextRouter = useRouter();
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
        idGroup: string
    }     
}

export const getServerSideProps = async({query}: extentendNextPageContext)=>{
    //create product request
    const responseData = await axios.get(`${process.env.BACKEND_URL}/api/product/`);
    if(responseData.status === 200){
        return {
            props: {
                count: responseData.data.count,
                allProducts: responseData.data.rows
            },
        }
    }
    console.log(responseData.data);
    return {
        props: {},
    }
  }

export default GroupCatalog;