import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext, NextPageContext} from "next";
import { useRouter } from "next/router";
import CommonHead from "../../components/CommonHead";

const groupCatalog = () =>{
    const dataRoute = useRouter();
    return (
        <>
            {
                //maybe will use redux to save curent catalogname and id for title
            }
            <CommonHead title="Catalog"/>
            <h1>this page with id: {dataRoute.query.idGroup}</h1>
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
    const responseData = await axios.get(`${process.env.BACKEND_URL}/product/`);
    console.log(responseData.data);
    return {
      props: {},
    }
  }

export default groupCatalog;