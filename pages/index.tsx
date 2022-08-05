import axios from "axios";
import CommonHead from "../components/CommonHead";
import ProductGroupPanel from "../components/ProductGroupPanel";
import { ITypeProduct } from "../interfaces/ITypeProduct";
import ProductList from "../components/ProductsList";

interface IPropsHomePage{
  products: ITypeProduct[]
}

const Home = ({products}: IPropsHomePage) => {
  return(
    <article>
      {
      //have error on next line???
      }
      <CommonHead />
      <ProductGroupPanel products={products}/>
      {products.map(element=><ProductList name={element.name} idGroup={element.id} limit={true} />)}
    </article>)

    
}

export async function getServerSideProps() {
  try{
    const response = await axios.get(process.env.BACKEND_URL + '/api/type_product');
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
