import axios from 'axios'
import CommonHead from '../components/CommonHead'
import ProductGroupPanel from '../components/ProductGroupPanel'
import { ITypeProduct } from '../interfaces/ITypeProduct'
import ProductList from '../components/ProductsList'
import { IShortProduct } from '../interfaces/IProduct'

interface IPropsHomePage{
  products: ITypeProduct[],
  mostPopular: IShortProduct[]
}

const Home = ({products, mostPopular}: IPropsHomePage) => {
  return(
    <article>
      {
      //have error on next line???
      }
      <CommonHead />
      <ProductGroupPanel products={products}/>
      {products.map(element=><ProductList dataElemets = {mostPopular} name={element.name} idGroup={element.id} limit={true} />)}
    </article>)

    
}

export async function getServerSideProps() {
  try{
    const responseMostPopularProdycts = await axios.get(process.env.BACKEND_URL + '/api/product/mostPopular')
    const mostPopular: IShortProduct = responseMostPopularProdycts.data.data

    const responseTypes = await axios.get(process.env.BACKEND_URL + '/api/types')
    const products: ITypeProduct[] = responseTypes.data.data
    return {
      props: {products, mostPopular},  
    }
  }catch(e){
    return {
      props: {products: []},  
    }
  }

  return {
    props: {},
  }
}

export default Home
