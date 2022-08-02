import axios from "axios";
import CommonHead from "../components/CommonHead";
import ProductGroupPanel from "../components/ProductGroupPanel";
import { ITypeProduct } from "../interfaces/interfaceIncomingData";

interface IPropsHomePage{
  products: ITypeProduct[]
}

const Home = ({products}: IPropsHomePage) => {
  return(
    <article>
      <ProductGroupPanel products={products}/>
      <h1>this is main page</h1>
    </article>)

    
}

export async function getServerSideProps() {
  try{
    const response = await axios.get(process.env.BACKEND_URL + '/type_product');
    if(response.status===200){
      const products: ITypeProduct[] = response.data;
      return {
        props: {products},
      }  
    }
  }catch(e){

  }

  return {
    props: {},
  }
}

export default Home
